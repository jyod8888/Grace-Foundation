'use client';

import { useMemo, useState } from 'react';

const fallbackFormUrl = 'https://form.jotform.com/YOUR_JOTFORM_FORM_ID';

export default function ContactForm() {
  const configuredFormUrl = process.env.NEXT_PUBLIC_JOTFORM_FORM_URL;
  const formUrl = configuredFormUrl || fallbackFormUrl;
  const isConfigured = Boolean(configuredFormUrl && !configuredFormUrl.includes('YOUR_JOTFORM_FORM_ID'));
  const [isLoaded, setIsLoaded] = useState(false);

  const embedUrl = useMemo(() => {
    if (!formUrl) return '';
    const separator = formUrl.includes('?') ? '&' : '?';
    return `${formUrl}${separator}nojump=1&transparent=1`;
  }, [formUrl]);

  if (!isConfigured) {
    return (
      <div className="form-card contact-form-pro jotform-setup-card">
        <p className="eyebrow">Contact form setup</p>
        <h2>Connect your Jotform form</h2>
        <p>
          Create the Grace Foundation contact form in Jotform, connect it to Google Sheets, and then paste your Jotform form link into the project environment file.
        </p>
        <div className="setup-steps">
          <p><strong>1.</strong> Create a Jotform with fields for name, email, country code, phone, inquiry type, and “How can Grace help?”</p>
          <p><strong>2.</strong> In Jotform, go to <strong>Settings → Integrations → Google Sheets</strong> and connect the form to your Google Sheet.</p>
          <p><strong>3.</strong> In the website project, create <strong>.env.local</strong> and add your form URL:</p>
        </div>
        <pre className="code-note">NEXT_PUBLIC_JOTFORM_FORM_URL=https://form.jotform.com/YOUR_FORM_ID</pre>
        <p className="small-note">
          After saving the file, restart the website with <strong>npm run dev</strong>. The form will then show here and submissions will be handled by Jotform.
        </p>
      </div>
    );
  }

  return (
    <div className="form-card contact-form-pro jotform-card">
      <h2>Send a Message</h2>
      <p>
        Choose the correct inquiry type so Grace Foundation can review your message, email you back, and keep the request organized in Google Sheets.
      </p>

      <div className="jotform-frame-wrap">
        {!isLoaded && <div className="jotform-loading">Loading secure contact form...</div>}
        <iframe
          title="Grace Foundation Contact Form"
          src={embedUrl}
          className="jotform-frame"
          allow="geolocation; microphone; camera"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}
