# 🚀 Quick Start: SendGrid Setup (2-Minute Guide)

Perfect! You have a 2-month SendGrid trial. Let's get you set up quickly.

## Step 1: Get Your SendGrid API Key (2 minutes)

1. **Log in to SendGrid** → https://app.sendgrid.com
2. Go to **Settings** → **API Keys**
3. Click **Create API Key**
4. Name it: `Liqwifi Waitlist`
5. Select **Full Access** (or **Restricted Access** with Mail Send)
6. Click **Create & View**
7. **Copy the API key** (starts with `SG.`) - you won't see it again!

## Step 2: Verify Your Sender Email (2 minutes)

1. In SendGrid, go to **Settings** → **Sender Authentication**
2. Click **Verify a Single Sender**
3. Fill in:
   - **From Email**: `noreply@liqwifi.com` (or your domain email)
   - **From Name**: `Liqwifi`
   - Complete the form
4. **Check your email** and click the verification link

## Step 3: Add Credentials to Your Project (1 minute)

1. Create `.env.local` in your project root:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and fill in:
   ```bash
   SENDGRID_API_KEY=SG.your_actual_api_key_here
   SENDGRID_FROM_EMAIL=noreply@liqwifi.com
   ```

   **That's it!** You don't need the Google Sheets variables.

## Step 4: Test It! (1 minute)

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Go to http://localhost:3000/waitlist

3. Fill out and submit the form

4. **Check your email** - you should receive a beautiful welcome email! 🎉

## Step 5: Deploy to Netlify

1. Go to your **Netlify dashboard**
2. **Site settings** → **Environment variables**
3. Add:
   - `SENDGRID_API_KEY` = your API key
   - `SENDGRID_FROM_EMAIL` = your verified email
4. Deploy!

---

## ✅ What You Get

- ✅ Beautiful branded welcome emails
- ✅ Form works perfectly
- ✅ No Google Cloud setup needed
- ✅ Works with your 2-month trial

## 📧 Email Preview

Users will receive a professional email with:
- Liqwifi branding (green & blue gradient)
- Personalized greeting
- List of early access benefits
- Professional design

---

## 🐛 Troubleshooting

**Email not sending?**
- Check sender email is verified in SendGrid
- Verify API key has Mail Send permissions
- Check SendGrid dashboard → Activity → see delivery status

**Form error?**
- Make sure `.env.local` exists (not `.env`)
- Restart your dev server after adding env variables
- Check console for error messages

---

## 📚 Need More Details?

See `SETUP_SIMPLE.md` for detailed instructions.

---

**You're all set!** 🎉 Your waitlist is ready to collect signups and send beautiful welcome emails.
