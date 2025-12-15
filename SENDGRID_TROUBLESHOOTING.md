# SendGrid Contact Saving - Troubleshooting

## Issue: No Data Showing in SendGrid

If you submitted the form but don't see the data in SendGrid, follow these steps:

## Step 1: Check Server Logs

1. **Go to Netlify Dashboard** → Your Site → **Functions** → **Functions Logs**
2. Look for messages like:
   - `✅ Contact saved to SendGrid Marketing Contacts`
   - `⚠️ SendGrid contact save error:`
3. This will tell you if the API call is working

## Step 2: Verify API Key Permissions

Your SendGrid API key needs **Marketing Contacts** permissions:

1. Go to **SendGrid** → **Settings** → **API Keys**
2. Click on your API key
3. Make sure **Marketing** permissions are enabled
4. If not, create a new API key with **Full Access** or **Marketing** permissions

## Step 3: Check Where to View Contacts

1. Go to **SendGrid Dashboard** → **Marketing** → **Contacts**
2. **NOT** in "Email API" → "Contacts" (that's different!)
3. You should see all waitlist signups in **Marketing Contacts**

## Step 4: Test the API Directly

You can test if the API is working by checking the Netlify function logs after submitting the form.

## Step 5: Check Custom Fields (Optional)

If you see errors about custom fields:

1. The code now works **without** custom fields
2. Basic contact info (name, email, phone) will always be saved
3. Custom fields are optional - only added if they exist in SendGrid

## Common Issues

### Issue: "401 Unauthorized"
- **Fix:** Check your `SENDGRID_API_KEY` in Netlify environment variables
- Make sure it starts with `SG.` and is complete

### Issue: "403 Forbidden"
- **Fix:** Your API key doesn't have Marketing Contacts permissions
- Create a new API key with Full Access or Marketing permissions

### Issue: "Custom field not found"
- **Fix:** This is now handled - custom fields are optional
- The contact will still be saved without custom fields

### Issue: Contact saved but not visible
- **Fix:** Make sure you're looking in **Marketing** → **Contacts**, not Email API → Contacts

## Quick Test

1. Submit the waitlist form
2. Check Netlify Functions Logs for any errors
3. Go to SendGrid → Marketing → Contacts
4. You should see the new contact

## Still Not Working?

1. **Check Netlify logs** - Look for error messages
2. **Verify API key** - Make sure it has Marketing permissions
3. **Check SendGrid dashboard** - Look in Marketing → Contacts (not Email API)
4. **Test with a simple contact** - The code should work even without custom fields

The updated code now:
- ✅ Works without custom fields
- ✅ Better error handling
- ✅ More detailed logging
- ✅ Only adds custom fields if they have values

