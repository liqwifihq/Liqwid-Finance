# Simple Setup Guide (SendGrid Only - No Google Cloud!)

**Perfect for SendGrid trials!** This guide sets up SendGrid-only mode - no Google Cloud needed.

If you want to skip Google Sheets and just use SendGrid for emails, this is the simpler setup option.

## ✅ What You'll Get

- ✅ Welcome emails sent to users via SendGrid
- ✅ Form submissions work perfectly
- ❌ No Google Sheets storage (data only in emails)

**Note:** You can always add Google Sheets later if you want spreadsheet storage.

---

## Step 1: Set Up SendGrid (Required)

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
Create a `.env.local` file in your project root:

```bash
# SendGrid Configuration (REQUIRED)
SENDGRID_API_KEY=SG.your_api_key_here
SENDGRID_FROM_EMAIL=noreply@liqwifi.com

# Google Sheets Configuration (OPTIONAL - leave empty if not using)
# GOOGLE_SERVICE_ACCOUNT_EMAIL=
# GOOGLE_PRIVATE_KEY=
# GOOGLE_SPREADSHEET_ID=
```

---

## Step 2: Test Locally

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to `/waitlist` and submit the form

3. Check your email inbox for the welcome email

---

## Step 3: Deploy to Production (Netlify)

1. Go to your Netlify dashboard
2. Navigate to **Site settings** > **Environment variables**
3. Add these variables:
   - `SENDGRID_API_KEY` = your SendGrid API key
   - `SENDGRID_FROM_EMAIL` = your verified sender email

4. Deploy your changes

5. Test the waitlist form on your production site

---

## That's It! 🎉

You're done! The waitlist form will now:
- ✅ Send welcome emails to users
- ✅ Work perfectly without Google Sheets

---

## Want to Add Google Sheets Later?

If you decide you want spreadsheet storage later, you can:
1. Follow the Google Sheets setup in `SETUP.md`
2. Add the Google credentials to your `.env.local`
3. The code will automatically start saving to Sheets

No code changes needed - it's already set up to work with or without Google Sheets!

---

## Troubleshooting

### Email Not Sending
- Verify sender email is verified in SendGrid
- Check API key has Mail Send permissions
- Check SendGrid dashboard for delivery status
- Free tier allows 100 emails/day

### Form Not Working
- Check that `SENDGRID_API_KEY` and `SENDGRID_FROM_EMAIL` are set
- Check server logs for error messages
- Verify you're using `.env.local` for local development

---

## Alternative: Use Zapier/Make.com (No Code)

If you want Google Sheets but don't want to set up Google Cloud, you can:

1. Set up SendGrid (as above)
2. Use Zapier or Make.com to create a webhook
3. Connect the webhook to Google Sheets
4. Update the API route to call your webhook instead

This way you get Google Sheets storage without setting up Google Cloud!

