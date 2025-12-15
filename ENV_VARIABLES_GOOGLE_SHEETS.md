# Environment Variables for Google Sheets

## Option 1: Google Apps Script Webhook (RECOMMENDED - No Google Cloud needed!)

Add this to your `.env.local` or Vercel environment variables:

```bash
# Google Sheets Webhook URL (from Google Apps Script)
# Get this from: Google Apps Script → Deploy → Web app → Copy URL
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycby.../exec

# Optional: Password for security (if you added password check in Apps Script)
# GOOGLE_SHEETS_PASSWORD=your_secret_password_here
```

**That's it!** No service account, no Google Cloud setup needed.

---

## Option 2: Google Service Account (Requires Google Cloud setup)

If you prefer the service account method:

```bash
# Google Service Account Email
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com

# Google Private Key (from service account JSON)
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Google Spreadsheet ID (from the sheet URL)
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id_here
```

---

## Which Method to Use?

**Use Option 1 (Apps Script)** if:
- ✅ You want the simplest setup
- ✅ You don't have a Google Cloud account
- ✅ You just need to store data in a sheet

**Use Option 2 (Service Account)** if:
- ✅ You already have Google Cloud set up
- ✅ You need more advanced features
- ✅ You're comfortable with service accounts

---

## Quick Setup for Apps Script Method

1. Follow the guide in `GOOGLE_SHEETS_SIMPLE.md`
2. Get your Web App URL from Google Apps Script
3. Add `GOOGLE_SHEETS_WEBHOOK_URL` to your environment variables
4. Done! 🎉

The code will automatically use the Apps Script method if `GOOGLE_SHEETS_WEBHOOK_URL` is set.
