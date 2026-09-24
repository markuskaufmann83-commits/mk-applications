"use strict";
/**
 * Azure Function: Contact Form Handler (Compiled JS)
 * Endpoint: /api/contact
 * Hosting: Azure Static Web Apps - Free Tier Integrated Functions
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async function (context, req) {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'X-Content-Type-Options': 'nosniff',
  };

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
    let body = {};
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

    // 1. Honeypot check
    if (honeypot && honeypot.trim().length > 0) {
      context.log.warn('Spam detected via honeypot field.');
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
    const errors = [];

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

    const inquiry = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 150),
      projectType: (projectType || 'Allgemeine Anfrage').toString().trim().slice(0, 100),
      message: message.trim().slice(0, 5000),
      receivedAt: new Date().toISOString(),
      source: 'mk-applications.de',
    };

    context.log.info(
      `Neue Projektanfrage von "${inquiry.name}" <${inquiry.email}> für Bereich "${inquiry.projectType}".`
    );

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
  } catch (err) {
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
};
