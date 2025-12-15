# Google Sheets Setup - Ready to Use! ✅

Your Google Sheets integration is configured and ready!

## Your Configuration

**Web App URL:**
```
https://script.google.com/macros/s/AKfycbzJUBjAsiC-lRb2jKr1M3vYiY_niHTepkwR8z2Lndz2TBJQ7e32sSeRi8llVDXsbkktpA/exec
```

**Sheet ID:**
```
1QSrXlSFjB7gvIJ6cZLmSPOLIp00tHE0tljOnASLRURQ
```

## Add to Environment Variables

### For Local Development (.env.local)

Add this line:
```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbzJUBjAsiC-lRb2jKr1M3vYiY_niHTepkwR8z2Lndz2TBJQ7e32sSeRi8llVDXsbkktpA/exec
```

### For Vercel (Production)

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add new variable:
   - **Key**: `GOOGLE_SHEETS_WEBHOOK_URL`
   - **Value**: `https://script.google.com/macros/s/AKfycbzJUBjAsiC-lRb2jKr1M3vYiY_niHTepkwR8z2Lndz2TBJQ7e32sSeRi8llVDXsbkktpA/exec`
   - **Environment**: Select **Production**, **Preview**, and **Development**
4. Click **Save**
5. **Redeploy** your project (three dots → Redeploy)

## Verify Your Google Sheet Setup

Make sure your Google Sheet has these headers in **Row 1**:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | First Name | Last Name | Email | Phone | Country | Interests | Hear About Us |

## Test It

1. Submit the waitlist form on your site
2. Check your Google Sheet - the data should appear automatically!
3. Check the browser console or Vercel logs for confirmation

## What Gets Saved

Every form submission will save:
- ✅ Timestamp (automatically added)
- ✅ First Name
- ✅ Last Name
- ✅ Email
- ✅ Phone
- ✅ Country
- ✅ Interests
- ✅ Hear About Us

## Troubleshooting

**Data not appearing?**
- Check that the Apps Script is deployed and set to "Anyone" access
- Check the Apps Script execution logs (Executions tab)
- Verify the headers match exactly (Row 1)

**Getting errors?**
- Make sure the webhook URL is correct
- Check that the Apps Script function is named `doPost`
- Verify environment variables are set correctly

## Next Steps

1. ✅ Add the environment variable to Vercel
2. ✅ Redeploy
3. ✅ Test the form
4. ✅ Check your Google Sheet!

Your Google Sheets integration is ready! 🎉
