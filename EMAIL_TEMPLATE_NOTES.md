# Email Template Configuration Notes

## Logo URL

The email template uses the Liqwifi logo from your public folder. Make sure:

1. **The logo is accessible** at: `https://liqwifi.com/Liqwifi_logo.svg`
2. **Or set environment variable** `NEXT_PUBLIC_SITE_URL` in Netlify:
   - Go to Netlify → Site settings → Environment variables
   - Add: `NEXT_PUBLIC_SITE_URL` = `https://liqwifi.com`

## Display Name

The email will show as:
- **From:** Liqwid Finance <support@liqwifi.com>
- **Subject:** Welcome to Liqwifi

## Email Changes Made

✅ Removed all emojis
✅ Simplified design with logo header
✅ Reduced length while keeping key details
✅ Changed display name to "Liqwid Finance"
✅ More professional, less generic tone

## Testing

To test the email:
1. Submit the waitlist form
2. Check the email inbox
3. Verify:
   - Logo displays correctly
   - Display name shows "Liqwid Finance"
   - Content is simplified and professional

