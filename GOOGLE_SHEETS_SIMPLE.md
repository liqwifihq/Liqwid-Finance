# Google Sheets Integration (No Google Cloud Account Needed!)

This method uses **Google Apps Script** to create a simple webhook that writes to Google Sheets. **No service account or Google Cloud setup required!**

## How It Works

1. Create a Google Sheet
2. Add a Google Apps Script (acts as a webhook)
3. Deploy it as a web app
4. Call it from your Next.js API route

**No Google Cloud account needed!** Just a regular Google account.

---

## Step 1: Create a Google Sheet

1. Go to **Google Sheets** (https://sheets.google.com)
2. Create a **new spreadsheet**
3. Name it: **"Liqwifi Waitlist"**
4. Add headers in **Row 1**:
   ```
   A1: Timestamp
   B1: First Name
   C1: Last Name
   D1: Email
   E1: Phone
   F1: Country
   G1: Interests
   H1: Hear About Us
   ```
5. **Copy the Sheet ID** from the URL:
   - URL looks like: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - The `SHEET_ID_HERE` is what you need

---

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the JSON data from the request
    var data = JSON.parse(e.postData.contents);
    
    // Get current timestamp
    var timestamp = new Date();
    
    // Add the data to the sheet
    sheet.appendRow([
      timestamp,
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.country || '',
      data.interests || '',
      data.hearAboutUs || ''
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon) or press `Ctrl+S` / `Cmd+S`
5. Name the project: **"Liqwifi Waitlist Webhook"**

---

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the **gear icon** (⚙️) next to "Select type"
3. Choose **"Web app"**
4. Configure:
   - **Description**: "Liqwifi Waitlist Webhook"
   - **Execute as**: **"Me"** (your email)
   - **Who has access**: **"Anyone"** (important!)
5. Click **Deploy**
6. **Authorize access**:
   - Click **"Authorize access"**
   - Choose your Google account
   - Click **"Advanced"** → **"Go to [project name] (unsafe)"**
   - Click **"Allow"**
7. **Copy the Web App URL** - it looks like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```
   **⚠️ IMPORTANT: Save this URL!** You'll need it for the Next.js code.

---

## Step 4: Update Your Next.js Code

I'll update your API route to call this webhook. You just need to provide the **Web App URL**.

---

## Step 5: Test It

1. Submit the waitlist form
2. Check your Google Sheet - the data should appear!

---

## Security (Optional but Recommended)

To add basic security, you can add a simple password check:

### Update the Apps Script:

```javascript
function doPost(e) {
  try {
    // Simple password check (optional)
    var data = JSON.parse(e.postData.contents);
    var password = 'YOUR_SECRET_PASSWORD_HERE'; // Change this!
    
    if (data.password !== password) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Unauthorized'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Rest of the code...
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var timestamp = new Date();
    
    sheet.appendRow([
      timestamp,
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.country || '',
      data.interests || '',
      data.hearAboutUs || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

Then add the password to your environment variables.

---

## Troubleshooting

**Q: "Authorization required" error**
- Make sure you clicked "Authorize access" when deploying
- Make sure "Who has access" is set to "Anyone"

**Q: Data not appearing in sheet**
- Check the Apps Script execution logs: **Executions** tab in Apps Script
- Make sure the sheet headers match (Row 1)

**Q: "Script function not found"**
- Make sure the function is named `doPost`
- Make sure you saved the script before deploying

**Q: CORS errors**
- Google Apps Script web apps handle CORS automatically
- If you see CORS errors, check the Web App URL is correct

---

## Advantages of This Method

✅ **No Google Cloud account needed**  
✅ **No service account setup**  
✅ **No OAuth complexity**  
✅ **Free** (Google Apps Script is free)  
✅ **Simple** (just copy-paste code)  
✅ **Works immediately**  

## Limitations

⚠️ **Rate limits**: Google Apps Script has daily execution limits (but very generous for small projects)  
⚠️ **Security**: Web app is public (use password if needed)  
⚠️ **No real-time**: Data appears when script runs (usually instant)  

---

## Next Steps

1. ✅ Create the Google Sheet
2. ✅ Add the Apps Script code
3. ✅ Deploy as web app
4. ✅ **Share the Web App URL with me**
5. ✅ I'll update your Next.js code to use it!

**This is much simpler than the Google Cloud method!** 🎯
