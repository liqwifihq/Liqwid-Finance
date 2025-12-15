# Viewing Form Data in SendGrid

## How It Works

When someone submits the waitlist form, the data is now automatically saved to **SendGrid Marketing Contacts**. You can view all submissions in your SendGrid dashboard.

## Where to View the Data

1. **Go to SendGrid Dashboard** → https://app.sendgrid.com
2. Navigate to **Marketing** → **Contacts**
3. You'll see all waitlist signups listed there!

## What Data is Stored

Each contact includes:
- ✅ **Email** (primary identifier)
- ✅ **First Name**
- ✅ **Last Name**
- ✅ **Phone Number** (if provided)
- ✅ **Country** (custom field)
- ✅ **Interests** (custom field)
- ✅ **How did you hear about us** (custom field)
- ✅ **Submission Timestamp** (custom field)

## Setting Up Custom Fields (Optional)

To see the additional data (Country, Interests, etc.) in SendGrid:

1. Go to **SendGrid** → **Settings** → **Custom Fields**
2. Create these custom fields:
   - **Field ID: e1** - Name: "Country" - Type: Text
   - **Field ID: e2** - Name: "Interests" - Type: Text
   - **Field ID: e3** - Name: "Hear About Us" - Type: Text
   - **Field ID: e4** - Name: "Submission Date" - Type: Text

**Note:** If you don't create these custom fields, the data will still be saved but won't be visible in the SendGrid UI. The basic contact info (name, email, phone) will always be visible.

## Admin Notification Email (Optional)

You can also receive an email notification for each new signup:

1. Add this environment variable to Netlify:
   - `SENDGRID_ADMIN_EMAIL` = your email address (e.g., `support@liqwifi.com`)

2. You'll receive an email with all the form data whenever someone signs up!

## Exporting Data

To export all contacts:

1. Go to **SendGrid** → **Marketing** → **Contacts**
2. Click **Export** button
3. Choose format (CSV, Excel, etc.)
4. Download your waitlist data

## Benefits

- ✅ **All data in one place** - SendGrid dashboard
- ✅ **Easy to export** - CSV/Excel format
- ✅ **Search and filter** - Find specific contacts
- ✅ **Segment contacts** - Create lists based on interests, country, etc.
- ✅ **Email marketing** - Send targeted emails to waitlist members

## Current Status

✅ **Already implemented!** The code automatically saves all form submissions to SendGrid Marketing Contacts.

No additional setup needed - just go to SendGrid dashboard to view your data!
