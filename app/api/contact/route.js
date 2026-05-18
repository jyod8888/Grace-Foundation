const FORM_RECIPIENT = 'gracefoundation2@gmail.com';

function isValidEmail(email = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

function sanitize(value = '') {
  return String(value).replace(/[<>]/g, '').trim();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = sanitize(body.name);
    const email = sanitize(body.email).toLowerCase();
    const countryCode = sanitize(body.countryCode || '+1');
    const phone = sanitize(body.phone);
    const fullPhone = sanitize(body.fullPhone || `${countryCode} ${phone}`);
    const interest = sanitize(body.interest);
    const message = sanitize(body.message);

    if (!name || !isValidEmail(email) || !interest || message.length < 10) {
      return Response.json({ message: 'Please complete all required fields with valid information.' }, { status: 400 });
    }

    const submission = {
      _subject: `Grace Foundation Website Inquiry: ${interest}`,
      _template: 'table',
      _captcha: 'false',
      name,
      email,
      phone: fullPhone,
      inquiry_type: interest,
      message,
      submitted_from: 'Grace Foundation Contact Page',
    };

    const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${FORM_RECIPIENT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(submission),
    });

    if (!formSubmitResponse.ok) {
      const errorText = await formSubmitResponse.text().catch(() => '');
      console.error('FormSubmit failed:', formSubmitResponse.status, errorText);
      return Response.json(
        { message: 'The form service could not send the message. Please confirm the Grace Foundation email verification or try again shortly.' },
        { status: 502 }
      );
    }

    return Response.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { message: 'Sorry, the message could not be sent right now. Please try again or email Grace Foundation directly.' },
      { status: 500 }
    );
  }
}
