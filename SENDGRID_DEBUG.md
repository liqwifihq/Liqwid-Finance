# SendGrid Contact Saving - Debug Guide

## Issue: Form Data Not Appearing in SendGrid

If contacts aren't showing up in SendGrid, follow these steps:

## Step 1: Check Netlify Function Logs

**This is the most important step!**

1. Go to **Netlify Dashboard** → Your Site
2. Click **Functions** → **Functions Logs**
3. Look for messages when you submit the form:
   - `📤 Attempting to save contact to SendGrid`
   - `✅ Contact saved to SendGrid Marketing Contacts successfully`
   - `❌ SendGrid contact save FAILED` (with error details)

**The logs will tell you exactly what's wrong!**

## Step 2: Verify API Key Permissions

Your SendGrid API key **MUST** have **Marketing Contacts** permissions:

1. Go to **SendGrid** → **Settings** → **API Keys**
2. Click on your API key (or create a new one)
3. **CRITICAL**: Make sure **"Marketing"** or **"Full Access"** is enabled
4. If you see "Restricted Access" with only "Mail Send", that's the problem!

**Solution**: Create a new API key with **Full Access** or **Marketing** permissions

## Step 3: Check Where to View Contacts

Contacts are saved to **Marketing Contacts**, NOT Email API Contacts:

1. Go to **SendGrid Dashboard**
2. Click **Marketing** (left sidebar) → **Contacts**
3. **NOT** "Email API" → "Contacts" (that's different!)

You should see all waitlist signups in **Marketing → Contacts**

## Step 4: Test the API Directly

You can test if your API key works:

```bash
curl -X PUT "https://api.sendgrid.com/v3/marketing/contacts" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "contacts": [{
      "email": "test@example.com",
      "first_name": "Test",
      "last_name": "User"
    }]
  }'
```

Replace `YOUR_API_KEY` with your actual API key.

## Common Error Messages

### Error 401: Unauthorized
- **Problem**: Invalid API key
- **Fix**: Check `SENDGRID_API_KEY` in Netlify environment variables
- **Verify**: Key starts with `SG.` and is complete

### Error 403: Forbidden
- **Problem**: API key doesn't have Marketing Contacts permissions
- **Fix**: Create new API key with **Full Access** or **Marketing** permissions
- **Steps**:
  1. SendGrid → Settings → API Keys
  2. Create new key
  3. Select **Full Access** (or **Marketing** with Contacts permission)
  4. Update `SENDGRID_API_KEY` in Netlify

### Error 400: Bad Request
- **Problem**: Invalid contact data format
- **Fix**: Check Netlify logs for specific error message
- **Note**: The code now only sends basic fields (email, name, phone) to avoid this

### Contact Saved But Not Visible
- **Problem**: Looking in wrong place or cache issue
- **Fix**: 
  1. Make sure you're in **Marketing → Contacts** (not Email API)
  2. Refresh the page
  3. Check if there's a filter applied
  4. Wait a few minutes (sometimes takes time to appear)

## What Data is Saved

Currently, the code saves:
- ✅ **Email** (required)
- ✅ **First Name**
- ✅ **Last Name**
- ✅ **Phone Number** (if provided)

**Note**: Additional fields (country, interests, etc.) are NOT saved to SendGrid by default because:
1. They require custom fields to be created first
2. They can cause errors if the fields don't exist
3. Basic contact info is more reliable

## Quick Fix: Remove Custom Fields

The code has been updated to **NOT use custom fields** by default. This means:
- ✅ Contacts will save reliably
- ✅ You'll see name, email, phone in SendGrid
- ❌ Country, interests, etc. won't be visible (but form still works)

## If You Want to See All Form Data

You have two options:

### Option 1: Use Google Sheets (Recommended)
- Set up Google Sheets integration
- All form data will be saved there
- See `SETUP.md` for instructions

### Option 2: Create Custom Fields in SendGrid
1. Go to **SendGrid** → **Settings** → **Custom Fields**
2. Create fields:
   - e1: "Country" (Text)
   - e2: "Interests" (Text)
   - e3: "Hear About Us" (Text)
   - e4: "Submission Date" (Text)
3. Then update the code to include custom fields again

## Current Status

✅ **Code is simplified** - Only saves basic contact info (no custom fields)
✅ **Better error logging** - Check Netlify logs for details
✅ **More reliable** - Won't fail due to missing custom fields

## Next Steps

1. **Check Netlify logs** - This will show you exactly what's happening
2. **Verify API key permissions** - Must have Marketing Contacts access
3. **Check Marketing → Contacts** - Not Email API → Contacts
4. **Test with a new form submission** - Watch the logs in real-time

The logs will tell you exactly what's wrong! 🔍
