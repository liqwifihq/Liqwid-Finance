# Google Sheets Troubleshooting Guide

## Issue: No Data Saved to Google Sheets

If you're not seeing data in your Google Sheet, follow these steps:

---

## Step 1: Check Environment Variable is Set

### In Vercel:

1. Go to your **Vercel project dashboard**
2. Click **Settings** → **Environment Variables**
3. Look for `GOOGLE_SHEETS_WEBHOOK_URL`
4. **Verify it's set** and matches:
   ```
   https://script.google.com/macros/s/AKfycbzJUBjAsiC-lRb2jKr1M3vYiY_niHTepkwR8z2Lndz2TBJQ7e32sSeRi8llVDXsbkktpA/exec
   ```

### Check Vercel Logs:

After submitting the form, check the logs. You should see:

**If environment variable is SET:**
```
🔍 Checking Google Sheets configuration...
🔍 GOOGLE_SHEETS_WEBHOOK_URL: SET
📤 Attempting to save to Google Sheets via Apps Script webhook...
```

**If environment variable is NOT SET:**
```
🔍 Checking Google Sheets configuration...
🔍 GOOGLE_SHEETS_WEBHOOK_URL: NOT SET
ℹ️ Google Sheets not configured - skipping data storage
```

---

## Step 2: Verify Google Apps Script Setup

### Check Apps Script Deployment:

1. Go to **Google Apps Script** (https://script.google.com)
2. Open your project
3. Click **Deploy** → **Manage deployments**
4. Verify:
   - ✅ Status is **"Active"**
   - ✅ **"Who has access"** is set to **"Anyone"**
   - ✅ The URL matches what you have in Vercel

### Test the Webhook Directly:

You can test the webhook URL directly using curl or Postman:

```bash
curl -X POST https://script.google.com/macros/s/AKfycbzJUBjAsiC-lRb2jKr1M3vYiY_niHTepkwR8z2Lndz2TBJQ7e32sSeRi8llVDXsbkktpA/exec \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "1234567890",
    "country": "USA",
    "interests": "Testing",
    "hearAboutUs": "Testing"
  }'
```

**Expected response:**
```json
{
  "success": true,
  "message": "Data saved successfully"
}
```

If you get an error, check the Apps Script code.

---

## Step 3: Check Apps Script Execution Logs

1. Go to **Google Apps Script**
2. Open your project
3. Click **Executions** (clock icon in left sidebar)
4. Look for recent executions
5. Click on an execution to see:
   - ✅ **Success** - Check your Google Sheet
   - ❌ **Error** - Click to see error details

### Common Errors:

**"Authorization required"**
- Solution: Re-authorize the script (Deploy → Manage deployments → Authorize)

**"TypeError: Cannot read property 'appendRow' of null"**
- Solution: Make sure the script is deployed and has access to the sheet

**"Script function not found: doPost"**
- Solution: Make sure the function is named exactly `doPost` (case-sensitive)

---

## Step 4: Verify Google Sheet Setup

### Check Headers:

Make sure **Row 1** has these exact headers:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | First Name | Last Name | Email | Phone | Country | Interests | Hear About Us |

### Check Sheet Permissions:

1. Open your Google Sheet
2. Click **Share** (top right)
3. Make sure the sheet is accessible (or at least the Apps Script has access)

---

## Step 5: Check Vercel Logs for Errors

After submitting the form, check Vercel logs for:

**Success:**
```
✅ Data saved to Google Sheets via Apps Script: { success: true, message: 'Data saved successfully' }
```

**Error:**
```
❌ Google Sheets webhook error: 400 { error: '...' }
```

**Network Error:**
```
❌ Google Sheets webhook exception: fetch failed
```

---

## Step 6: Redeploy After Adding Environment Variable

**IMPORTANT:** After adding `GOOGLE_SHEETS_WEBHOOK_URL` to Vercel:

1. Go to **Deployments** tab
2. Click the **three dots** (⋯) on the latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete
5. Test again

**Environment variables are only loaded at build/deploy time!**

---

## Common Issues & Solutions

### Issue: "GOOGLE_SHEETS_WEBHOOK_URL: NOT SET"

**Solution:**
1. Add the environment variable in Vercel
2. Make sure it's set for **Production** environment
3. **Redeploy** the project

### Issue: "Webhook response status: 400"

**Solution:**
- Check Apps Script code
- Verify the `doPost` function is correct
- Check Apps Script execution logs

### Issue: "Webhook response status: 401" or "403"

**Solution:**
- Re-deploy the Apps Script
- Make sure "Who has access" is set to **"Anyone"**
- Re-authorize the script

### Issue: "CORS error" or "Network error"

**Solution:**
- Google Apps Script web apps handle CORS automatically
- If you see CORS errors, the URL might be wrong
- Double-check the webhook URL

### Issue: Data appears in sheet but with wrong format

**Solution:**
- Check the Apps Script code matches the guide
- Verify the column order matches your headers
- Check that `appendRow` is using the correct array order

---

## Quick Checklist

- [ ] Environment variable `GOOGLE_SHEETS_WEBHOOK_URL` is set in Vercel
- [ ] Environment variable is set for **Production** environment
- [ ] Project has been **redeployed** after adding the variable
- [ ] Apps Script is deployed and **active**
- [ ] Apps Script "Who has access" is set to **"Anyone"**
- [ ] Google Sheet has correct headers in Row 1
- [ ] Apps Script function is named `doPost` (exact case)
- [ ] Tested webhook URL directly (curl/Postman)
- [ ] Checked Apps Script execution logs

---

## Still Not Working?

1. **Share the Vercel logs** - Look for the new debug messages
2. **Check Apps Script execution logs** - See if the script is running
3. **Test the webhook directly** - Use curl/Postman to test
4. **Verify the URL** - Make sure it matches exactly

The new code will show detailed logs to help debug! 🔍
