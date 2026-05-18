# Grace Foundation Contact Form: Jotform + Google Sheets Setup

This website is now ready to embed a Jotform contact form. Jotform will handle the submission, email notification, and Google Sheets storage.

## 1. Create the form in Jotform

Create one form named **Grace Foundation Contact Form** with these fields:

- Full Name
- Email Address
- Country Code
- Phone Number
- Inquiry Type
- How can Grace help?

Suggested inquiry type dropdown options:

- Donation
- Volunteering
- Partnership
- Education Support
- Institutional Care
- Women Empowerment
- Mother Nature
- General Inquiry

## 2. Turn on email notification

Inside Jotform, add an email notification to:

`gracefoundation2@gmail.com`

## 3. Connect Google Sheets

In Jotform:

1. Open the form.
2. Go to **Settings**.
3. Go to **Integrations**.
4. Select **Google Sheets**.
5. Connect the Google account.
6. Create or select the Grace Foundation inquiry spreadsheet.
7. Make sure all form fields are included.

## 4. Separate inquiry types into different tabs

Let Jotform write all submissions into one main tab first, such as:

`All Submissions`

Then create separate tabs in the same Google Sheet:

- Donations
- Volunteering
- Partnerships
- Education
- Institutional Care
- Women Empowerment
- Mother Nature
- General Inquiry

In each tab, use a FILTER formula based on the Inquiry Type column.

Example, if Inquiry Type is in column E:

`=FILTER('All Submissions'!A:Z, 'All Submissions'!E:E="Education Support")`

For Donations:

`=FILTER('All Submissions'!A:Z, 'All Submissions'!E:E="Donation")`

This keeps your main submission sheet complete while automatically showing each inquiry type on its own tab.

## 5. Connect the website to your Jotform form

Copy your published Jotform form URL. It should look similar to:

`https://form.jotform.com/123456789012345`

Create a file named `.env.local` in the project root and add:

`NEXT_PUBLIC_JOTFORM_FORM_URL=https://form.jotform.com/YOUR_FORM_ID`

Then restart the project:

`npm run dev`

## 6. Test

Open:

`http://localhost:3000/contact`

Submit a test form. It should:

- Stay on the website/contact page
- Show Jotform's confirmation message inside the form area
- Send an email notification to Grace Foundation
- Save the submission to Google Sheets
