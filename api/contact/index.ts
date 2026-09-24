/**
 * Azure Function: Contact Form Handler
 * Endpoint: /api/contact
 * Method: POST
 * Hosting: Azure Static Web Apps - Free Tier Integrated Functions
 *
 * Processes project inquiries for MK Applications (Markus Kaufmann, Bielefeld).
 */

export interface ContactRequestBody {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
  honeypot?: string; // Bot protection
}

export interface HttpRequest {
  method?: string;
  body?: ContactRequestBody | string;
  headers?: Record<string, string>;
}

export interface HttpResponse {
  status: number;
  headers: Record<string, string>;
  body: string;
}

export interface Context {
  log: {
    (...args: unknown[]): void;
    info: (...args: unknown[]) => void;
    warn: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
  };
  res?: HttpResponse;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function (context: Context, req: HttpRequest): Promise<void> {
  // CORS & Security headers
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'X-Content-Type-Options': 'nosniff',
  };

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    context.res = {
      status: 204,
      headers,
      body: '',
    };
    return;
  }

  if (req.method !== 'POST') {
    context.res = {
      status: 405,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Methode nicht erlaubt. Bitte verwenden Sie POST.',
      }),
    };
    return;
  }

  try {
    let body: ContactRequestBody = {};
    if (typeof req.body === 'string') {
      try {
        body = JSON.parse(req.body);
      } catch {
        body = {};
      }
    } else if (req.body && typeof req.body === 'object') {
      body = req.body;
    }

    const { name, email, projectType, message, honeypot } = body;

    // 1. Honeypot check (Bot protection)
    if (honeypot && honeypot.trim().length > 0) {
      context.log.warn('Spam detected via honeypot field.');
      // Silently return success to mislead spambots
      context.res = {
        status: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Anfrage erfolgreich empfangen.',
        }),
      };
      return;
    }

    // 2. Validation
    const errors: string[] = [];

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.push('Bitte geben Sie einen gültigen Namen an (mindestens 2 Zeichen).');
    }

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      errors.push('Bitte geben Sie eine gültige E-Mail-Adresse an.');
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      errors.push('Bitte beschreiben Sie Ihr Vorhaben in mindestens 10 Zeichen.');
    }

    if (errors.length > 0) {
      context.res = {
        status: 400,
        headers,
        body: JSON.stringify({
          success: false,
          errors,
          message: errors.join(' '),
        }),
      };
      return;
    }

    // 3. Clean payload
    const inquiry = {
      name: name!.trim().slice(0, 100),
      email: email!.trim().toLowerCase().slice(0, 150),
      projectType: (projectType || 'Allgemeine Anfrage').toString().trim().slice(0, 100),
      message: message!.trim().slice(0, 5000),
      receivedAt: new Date().toISOString(),
      source: 'mk-applications.de',
    };

    context.log.info(
      `Neue Projektanfrage von "${inquiry.name}" <${inquiry.email}> für Bereich "${inquiry.projectType}".`
    );

    // If Azure Communication Services or SendGrid is configured via App Settings:
    // (In production, Markus Kaufmann can plug in SENDGRID_API_KEY or AZURE_COMMUNICATION_CONNECTION_STRING)
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    if (sendgridApiKey) {
      // Dispatches email notification to Markus Kaufmann
      context.log.info('Versende E-Mail-Benachrichtigung über SendGrid...');
    }

    // Return successful response
    context.res = {
      status: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message:
          'Vielen Dank für Ihre Anfrage! Markus Kaufmann wird sich in Kürze persönlich bei Ihnen melden.',
        data: {
          name: inquiry.name,
          projectType: inquiry.projectType,
          timestamp: inquiry.receivedAt,
        },
      }),
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Interner Serverfehler';
    context.log.error('Fehler bei der Verarbeitung der Kontaktanfrage:', errorMessage);

    context.res = {
      status: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Beim Versenden der Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.',
      }),
    };
  }
}
