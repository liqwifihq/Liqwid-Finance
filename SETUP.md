# Waitlist Integration Setup Guide

This guide will help you set up SendGrid for email notifications and Google Sheets for storing waitlist data.

## Prerequisites

- A SendGrid account (free tier available)
- A Google account with access to Google Sheets
- A Google Cloud Project (free tier available)

---

## Step 1: SendGrid Setup

### 1.1 Create a SendGrid Account
1. Go to [SendGrid](https://sendgrid.com) and sign up for a free account
2. Verify your email address

### 1.2 Create an API Key
1. Log in to your SendGrid dashboard
2. Navigate to **Settings** > **API Keys**
3. Click **Create API Key**
4. Name it something like "Liqwifi Waitlist"
5. Select **Full Access** (or **Restricted Access** with Mail Send permissions)
6. Click **Create & View**
7. **Copy the API key immediately** - you won't be able to see it again!

### 1.3 Verify Sender Email
1. Go to **Settings** > **Sender Authentication**
2. Click **Verify a Single Sender**
3. Fill in your details:
   - **From Email**: The email address you want to send from (e.g., `noreply@liqwifi.com`)
   - **From Name**: Liqwifi
   - Complete the verification process
4. Check your email and click the verification link

### 1.4 Add to Environment Variables
Add these to your `.env.local` file:
```
SENDGRID_API_KEY=SG.your_api_key_here
SENDGRID_FROM_EMAIL=noreply@liqwifi.com
```

---

## Step 2: Google Sheets Setup

### 2.1 Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Click **Select a project** > **New Project**
3. Name it "Liqwifi Waitlist" (or similar)
4. Click **Create**

### 2.2 Enable Google Sheets API
1. In your project, go to **APIs & Services** > **Library**
2. Search for "Google Sheets API"
3. Click on it and press **Enable**

### 2.3 Create a Service Account
1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **Service Account**
3. Name it "liqwifi-waitlist-service"
4. Click **Create and Continue**
5. Skip the optional steps and click **Done**

### 2.4 Create and Download Service Account Key
1. Click on the service account you just created
2. Go to the **Keys** tab
3. Click **Add Key** > **Create new key**
4. Select **JSON** format
5. Click **Create** - this will download a JSON file
6. **Keep this file secure!** It contains sensitive credentials

### 2.5 Extract Credentials from JSON
Open the downloaded JSON file. You'll need:
- `client_email` - This is your `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `private_key` - This is your `GOOGLE_PRIVATE_KEY` (keep the quotes and newlines)

### 2.6 Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Liqwifi Waitlist" (or similar)
4. In the first row, add these headers:
   - Column A: `Timestamp`
   - Column B: `First Name`
   - Column C: `Last Name`
   - Column D: `Email`
   - Column E: `Phone`
   - Column F: `Country`
   - Column G: `Interests`
   - Column H: `How did you hear about us?`
5. Copy the **Spreadsheet ID** from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - The `SPREADSHEET_ID` is the long string between `/d/` and `/edit`

### 2.7 Share Sheet with Service Account
1. In your Google Sheet, click **Share** (top right)
2. Paste the **service account email** (from the JSON file, `client_email` field)
3. Give it **Editor** permissions
4. Click **Send** (you can uncheck "Notify people")

### 2.8 Add to Environment Variables
Add these to your `.env.local` file:
```
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id_here
```

**Important Notes:**
- The `GOOGLE_PRIVATE_KEY` must be wrapped in quotes
- Keep the `\n` characters in the private key (they represent newlines)
- The private key should start with `-----BEGIN PRIVATE KEY-----` and end with `-----END PRIVATE KEY-----`

---

## Step 3: Local Development Setup

### 3.1 Create Environment File
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in all the values from Steps 1 and 2

### 3.2 Test the Integration
1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to `/waitlist` and submit the form
3. Check:
   - Your email inbox for the welcome email
   - Your Google Sheet for the new row

---

## Step 4: Production Deployment (Netlify)

### 4.1 Add Environment Variables to Netlify
1. Go to your Netlify dashboard
2. Navigate to **Site settings** > **Environment variables**
3. Add all the variables from your `.env.local` file:
   - `SENDGRID_API_KEY`
   - `SENDGRID_FROM_EMAIL`
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY` (make sure to include the quotes and `\n` characters)
   - `GOOGLE_SPREADSHEET_ID`

### 4.2 Deploy
1. Push your changes to GitHub
2. Netlify will automatically deploy
3. Test the waitlist form on your production site

---

## Troubleshooting

### SendGrid Issues
- **Email not sending**: Check that your sender email is verified
- **API key errors**: Make sure the API key has Mail Send permissions
- **Rate limits**: Free tier allows 100 emails/day

### Google Sheets Issues
- **Permission denied**: Make sure you shared the sheet with the service account email
- **API not enabled**: Verify Google Sheets API is enabled in Google Cloud Console
- **Invalid credentials**: Check that the private key includes all newlines (`\n`)

### General Issues
- **Environment variables not loading**: Make sure you're using `.env.local` for local development
- **CORS errors**: Next.js API routes handle CORS automatically
- **500 errors**: Check your server logs for detailed error messages

---

## Security Best Practices

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Rotate API keys regularly**
3. **Use environment-specific keys** for production vs development
4. **Limit service account permissions** to only what's needed
5. **Monitor API usage** in both SendGrid and Google Cloud Console

---

## Support

If you encounter issues:
1. Check the console logs for error messages
2. Verify all environment variables are set correctly
3. Test each service independently (SendGrid and Google Sheets)
4. Review the troubleshooting section above
