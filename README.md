# Grace Foundation Next.js Website

Professional React + Next.js website for Grace Foundation.

## Run locally

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Build check

```bash
npm run build
```

## Contact form

The contact form is connected through FormSubmit and is set to send messages to:

```text
gracefoundation2@gmail.com
```

Important: The first time the hosted form is submitted, FormSubmit may send an activation/confirmation email to `gracefoundation2@gmail.com`. Open that email and confirm it so future form submissions go through.

## Deploy to Vercel

1. Push this folder to GitHub.
2. Go to Vercel and import the GitHub repository.
3. Use the default Next.js settings.
4. Connect the GoDaddy domain from Vercel > Project Settings > Domains.

## Latest design update

This version uses a dark navy/blue nonprofit theme inspired by modern foundation websites, includes a fixed professional navbar with the same logo, a top contact/donate bar, Bootstrap CDN support, a rotating hero slideshow, and India-related images stored in `data/images` and served from `public/data/images`.

## Contact form: Jotform + Google Sheets

This project now uses an embedded Jotform contact form instead of FormSubmit.

1. Create the Grace Foundation contact form in Jotform.
2. Add email notifications to `gracefoundation2@gmail.com`.
3. Connect the form to Google Sheets in Jotform Integrations.
4. Copy the published Jotform form URL.
5. Create `.env.local` using `.env.local.example`.
6. Restart the website.

See `JOTFORM_GOOGLE_SHEETS_SETUP.md` for the full setup.
