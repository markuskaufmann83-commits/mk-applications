/**
 * Azure Function: Contact Form Handler with Strato SMTP Email Dispatch
 * Endpoint: /api/contact
 * Method: POST
 * Hosting: Azure Static Web Apps - Free Tier Integrated Functions
 *
 * Dispatches project inquiries for MK Applications (Markus Kaufmann, Bielefeld)
 * via Strato SMTP directly to Markus Kaufmann's inbox.
 */

import nodemailer from 'nodemailer';

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

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

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

    // 4. SMTP Dispatch via Strato
    const smtpHost = process.env.SMTP_HOST || 'smtp.strato.de';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpSecure = process.env.SMTP_SECURE !== 'false'; // 465 uses SSL/TLS
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.NOTIFICATION_EMAIL || smtpUser || 'kontakt@mk-applications.de';

    let emailSent = false;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const safeName = escapeHtml(inquiry.name);
        const safeEmail = escapeHtml(inquiry.email);
        const safeType = escapeHtml(inquiry.projectType);
        const safeMessage = escapeHtml(inquiry.message).replace(/\n/g, '<br />');
        const formattedDate = new Date().toLocaleString('de-DE', {
          timeZone: 'Europe/Berlin',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });

        // HTML Email to Markus Kaufmann
        const htmlBody = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: #07182d; color: #ffffff; padding: 24px 32px; border-bottom: 3px solid #0ea5e9; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; }
    .header p { margin: 4px 0 0; font-size: 13px; color: #94a3b8; }
    .content { padding: 32px; }
    .badge { display: inline-block; background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 12px; padding: 4px 12px; rounded-radius: 9999px; margin-bottom: 20px; }
    .field { margin-bottom: 16px; }
    .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; font-weight: 700; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #0f172a; font-weight: 600; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; font-size: 14px; line-height: 1.6; color: #1e293b; margin-top: 16px; }
    .button { display: inline-block; background: #0f172a; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-size: 13px; font-weight: 700; margin-top: 24px; }
    .footer { padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Neue Anfrage über mk-applications.de</h1>
      <p>Eingegangen am ${formattedDate} Uhr</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Interessent</div>
        <div class="field-value">${safeName}</div>
      </div>
      <div class="field">
        <div class="field-label">E-Mail-Adresse</div>
        <div class="field-value"><a href="mailto:${safeEmail}" style="color: #0284c7; text-decoration: none;">${safeEmail}</a></div>
      </div>
      <div class="field">
        <div class="field-label">Projektbereich</div>
        <div class="field-value">${safeType}</div>
      </div>
      <div class="field">
        <div class="field-label">Projektbeschreibung / Nachricht</div>
        <div class="message-box">${safeMessage}</div>
      </div>
      <a href="mailto:${safeEmail}?subject=Re:%20Ihre%20Anfrage%20bei%20MK%20Applications" class="button">
        Direkt auf Anfrage antworten
      </a>
    </div>
    <div class="footer">
      MK Applications &bull; Markus Kaufmann &bull; Bielefeld &bull; Azure Static Web Apps
    </div>
  </div>
</body>
</html>
        `.trim();

        await transporter.sendMail({
          from: `"MK Applications Website" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: `"${inquiry.name}" <${inquiry.email}>`,
          subject: `[MK Applications] Neue Anfrage von ${inquiry.name} (${inquiry.projectType})`,
          text: `Neue Anfrage über mk-applications.de:\n\nName: ${inquiry.name}\nE-Mail: ${inquiry.email}\nBereich: ${inquiry.projectType}\nDatum: ${formattedDate}\n\nNachricht:\n${inquiry.message}\n`,
          html: htmlBody,
        });

        emailSent = true;
        context.log.info(`E-Mail erfolgreich an "${recipientEmail}" via Strato (${smtpHost}) zugestellt.`);

        // Optional Auto-Responder to the sender
        const sendAutoResponder = process.env.SEND_AUTORESPONDER !== 'false';
        if (sendAutoResponder) {
          try {
            await transporter.sendMail({
              from: `"Markus Kaufmann | MK Applications" <${smtpUser}>`,
              to: inquiry.email,
              subject: `Ihre Anfrage bei MK Applications`,
              text: `Hallo ${inquiry.name},\n\nvielen Dank für Ihre Anfrage bezüglich "${inquiry.projectType}".\n\nIhre Nachricht ist erfolgreich eingegangen. Ich werde Ihr Anliegen prüfen und mich innerhalb von 24 Stunden persönlich bei Ihnen melden.\n\nMit freundlichen Grüßen\nMarkus Kaufmann\n\n--\nMK Applications\nMaßgeschneiderte digitale Lösungen\nBielefeld, Deutschland\nhttps://mk-applications.de\n`,
            });
            context.log.info(`Auto-Responder an "${inquiry.email}" versendet.`);
          } catch (autoErr) {
            context.log.warn('Auto-Responder konnte nicht versendet werden:', autoErr);
          }
        }
      } catch (mailError: unknown) {
        const errorMsg = mailError instanceof Error ? mailError.message : String(mailError);
        context.log.error('Fehler beim E-Mail-Versand via Strato SMTP:', errorMsg);
      }
    } else {
      context.log.warn(
        'Strato SMTP ist noch nicht vollständig konfiguriert (SMTP_USER oder SMTP_PASS fehlen in Azure App Settings).'
      );
    }

    // 5. Successful HTTP Response to Website
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
          dispatched: emailSent,
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
