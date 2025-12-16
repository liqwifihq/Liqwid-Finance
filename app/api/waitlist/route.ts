import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
import { google } from 'googleapis'

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

// Initialize Google Sheets
async function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })
  return sheets
}

// Email template with Liqwifi branding
function getWelcomeEmailTemplate(data: {
  firstName: string
  lastName: string
  email: string
}) {
  // Logo URL - MUST use PNG, not SVG (email clients don't support SVG)
  // SVG images are blocked by Gmail, Outlook, and most email clients for security reasons
  // Solution: Convert SVG to PNG and host it, or use a CDN
  // For now, using GitHub raw URL for PNG (you'll need to add Liqwifi_logo.png to your repo)
  // Alternative: Use a CDN like Cloudinary, Imgur, or convert SVG to base64
  const logoUrl = 'https://liqwifi.com/Liqwifi_logo.png'
  
  // Fallback: If PNG doesn't exist yet, you can use this GitHub raw URL after uploading PNG
  // const logoUrl = 'https://raw.githubusercontent.com/liqwifihq/Liqwid-Finance/main/public/Liqwifi_logo.png'
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Liqwifi</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #F9FAFB;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #F9FAFB; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
          <!-- Header with logo on gradient background -->
          <tr>
            <td style="background: linear-gradient(135deg, #9ECE58 0%, #93E4F1 100%); padding: 16px 40px; text-align: center;">
              <a href="https://liqwifi.com" style="text-decoration: none; display: inline-block;">
                <img src="${logoUrl}" alt="Liqwifi" width="120" style="max-width: 120px; width: 120px; height: auto; display: block; margin: 0 auto; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;" />
              </a>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 16px; color: #0F0F0F; font-size: 18px; line-height: 26px; font-weight: 500; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                Hi ${data.firstName},
              </p>
              
              <p style="margin: 0 0 20px; color: #4B4B57; font-size: 16px; line-height: 24px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                Thank you for joining the Liqwifi waitlist. You're now among the first to access our platform when we launch.
              </p>
              
              <p style="margin: 0 0 20px; color: #4B4B57; font-size: 16px; line-height: 24px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                As an early member, you'll receive:
              </p>
              
              <ul style="margin: 0 0 24px; padding-left: 20px; color: #4B4B57; font-size: 16px; line-height: 24px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                <li style="margin-bottom: 8px;"><strong>Priority onboarding</strong> when we launch</li>
                <li style="margin-bottom: 8px;"><strong>Enhanced transaction limits</strong> for early members</li>
                <li style="margin-bottom: 8px;"><strong>Exclusive early features</strong> before public release</li>
              </ul>
              
              <p style="margin: 0 0 24px; color: #4B4B57; font-size: 16px; line-height: 24px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                Liqwifi will enable you to send and receive money locally and internationally, pay bills instantly, access loans based on your credit score, and grow your money through simple investments—all in one secure app.
              </p>
              
              <p style="margin: 0 0 24px; color: #4B4B57; font-size: 16px; line-height: 24px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                We'll keep you updated on our progress and notify you as soon as we're ready to launch.
              </p>
              
              <p style="margin: 24px 0 0; color: #4B4B57; font-size: 16px; line-height: 24px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                Regards,<br>
                <strong style="color: #0F0F0F; font-weight: 500;">The Liqwifi Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Social Media Links -->
          <tr>
            <td style="background-color: #FFFFFF; padding: 24px 40px 32px; text-align: center; border-bottom: 1px solid #E5E7EB;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                <tr>
                  <td style="padding: 0 12px;">
                    <a href="https://x.com/liqwifi" style="text-decoration: none; display: inline-block;">
                      <img src="https://img.icons8.com/ios-filled/50/000000/twitterx.png" alt="X (Twitter)" width="24" height="24" style="width: 24px; height: 24px; display: block; border: 0; outline: none; opacity: 0.7;" />
                    </a>
                  </td>
                  <td style="padding: 0 12px;">
                    <a href="https://instagram.com/liqwifi" style="text-decoration: none; display: inline-block;">
                      <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" width="24" height="24" style="width: 24px; height: 24px; display: block; border: 0; outline: none; opacity: 0.7;" />
                    </a>
                  </td>
                  <td style="padding: 0 12px;">
                    <a href="https://facebook.com/liqwifi" style="text-decoration: none; display: inline-block;">
                      <img src="https://img.icons8.com/ios-filled/50/000000/facebook.png" alt="Facebook" width="24" height="24" style="width: 24px; height: 24px; display: block; border: 0; outline: none; opacity: 0.7;" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #F9FAFB; padding: 24px 40px; text-align: center; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0 0 8px; color: #4B4B57; font-size: 13px; line-height: 18px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                You're receiving this email because you joined the Liqwifi waitlist.
              </p>
              <p style="margin: 0; color: #9CA3AF; font-size: 12px; line-height: 16px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                © ${new Date().getFullYear()} Liqwifi. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, country, interests, hearAboutUs } = body

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: firstName, lastName, and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const timestamp = new Date().toISOString()
    const interestsString = Array.isArray(interests) ? interests.join(', ') : interests || ''

    // Save to Google Sheets using Google Apps Script webhook (NO Google Cloud account needed!)
    // This is the SIMPLE method - just needs a Google Apps Script web app URL
    console.log('🔍 Checking Google Sheets configuration...')
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    console.log('🔍 GOOGLE_SHEETS_WEBHOOK_URL:', webhookUrl ? `SET (${webhookUrl.substring(0, 50)}...)` : 'NOT SET')
    
    if (webhookUrl) {
      console.log('📤 Attempting to save to Google Sheets via Apps Script webhook...')
      try {
        const webhookData: {
          firstName: any
          lastName: any
          email: any
          phone: string
          country: string
          interests: string
          hearAboutUs: string
          password?: string
        } = {
          firstName,
          lastName,
          email,
          phone: phone || '',
          country: country || '',
          interests: interestsString,
          hearAboutUs: hearAboutUs || '',
        }

        // Optional: Add password if you set up security in Apps Script
        if (process.env.GOOGLE_SHEETS_PASSWORD) {
          webhookData.password = process.env.GOOGLE_SHEETS_PASSWORD
        }

        console.log('📤 Webhook URL:', webhookUrl)
        console.log('📤 Webhook payload:', JSON.stringify(webhookData, null, 2))

        // Make the request with timeout
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookData),
          signal: controller.signal,
        })

        clearTimeout(timeoutId)

        console.log('📥 Response status:', response.status, response.statusText)
        console.log('📥 Response headers:', JSON.stringify(Object.fromEntries(response.headers.entries())))

        // Get response text first (Google Apps Script might return HTML or JSON)
        const responseText = await response.text()
        const responsePreview = responseText.length > 500 
          ? responseText.substring(0, 500) + '...' 
          : responseText
        console.log('📥 Response body:', responsePreview)

        if (response.ok) {
          // Try to parse as JSON, but handle HTML responses gracefully
          let result
          try {
            result = JSON.parse(responseText)
            console.log('✅ Data saved to Google Sheets via Apps Script (JSON response):', result)
          } catch (parseError: any) {
            // If it's not JSON, it might be HTML (Google Apps Script sometimes returns HTML on success)
            // Google Apps Script web apps can return HTML even on successful execution
            if (response.status === 200) {
              console.log('✅ Data saved to Google Sheets (HTML response, status 200 - likely success)')
              console.log('📋 Note: Google Apps Script may return HTML even on success')
            } else {
              console.warn('⚠️ Unexpected response format from Google Sheets webhook')
              console.warn('📋 Parse error:', parseError.message)
            }
          }
        } else {
          console.error('❌ Google Sheets webhook HTTP error')
          console.error('❌ Status:', response.status, response.statusText)
          console.error('❌ Response body:', responseText)
          
          // Provide helpful error messages
          if (response.status === 401 || response.status === 403) {
            console.error('❌ Authorization error - check Apps Script deployment permissions')
          } else if (response.status === 404) {
            console.error('❌ Webhook URL not found - verify the URL is correct')
          } else if (response.status >= 500) {
            console.error('❌ Server error - check Apps Script execution logs')
          }
        }
      } catch (sheetsError: any) {
        // Handle different types of errors
        if (sheetsError.name === 'AbortError') {
          console.error('❌ Google Sheets webhook timeout (exceeded 10 seconds)')
        } else if (sheetsError.message?.includes('fetch failed')) {
          console.error('❌ Google Sheets webhook network error:', sheetsError.message)
          console.error('❌ This might be a CORS issue or network connectivity problem')
        } else {
        console.error('❌ Google Sheets webhook exception:', sheetsError.message || sheetsError)
        }
        console.error('❌ Error stack:', sheetsError.stack)
        // Continue even if Sheets fails - we still want to send the email
      }
    } else if (
    // Alternative: Save to Google Sheets using Service Account (requires Google Cloud setup)
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SPREADSHEET_ID
    ) {
      console.log('📤 Attempting to save to Google Sheets via Service Account...')
      try {
        const sheets = await getGoogleSheetsClient()
        
        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
          range: 'Waitlist!A:H',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [[
              timestamp,
              firstName,
              lastName,
              email,
              phone || '',
              country || '',
              interestsString,
              hearAboutUs || '',
            ]],
          },
        })
        console.log('✅ Data saved to Google Sheets via Service Account')
      } catch (sheetsError) {
        console.error('⚠️ Google Sheets error (continuing anyway):', sheetsError)
        // Continue even if Sheets fails - we still want to send the email
      }
    } else {
      console.log('ℹ️ Google Sheets not configured - skipping data storage')
      console.log('ℹ️ To enable: Set GOOGLE_SHEETS_WEBHOOK_URL environment variable')
    }

    // Save contact to SendGrid Marketing Contacts (so you can see it in SendGrid dashboard)
    // This saves: email, first_name, last_name, phone_number, and custom fields
    if (process.env.SENDGRID_API_KEY) {
      try {
        // Build contact data with standard fields
        const contact: any = {
          email: email,
          first_name: firstName,
          last_name: lastName,
        }

        // Add phone if provided (standard SendGrid field)
        if (phone && phone.trim()) {
          contact.phone_number = phone
        }

        // Add custom fields
        // Note: Country is a reserved SendGrid field, so we don't need a custom field for it
        // We're saving: Interests and Hear About Us as custom fields
        const customFields: any = {}
        
        // Country - This is a reserved SendGrid field, but we'll save it if available
        // SendGrid has a built-in "country" field, but it might not be in the standard contact object
        // For now, we'll skip country as it's not a custom field
        
        // Interests field - using field name matching to find the ID dynamically
        // The field name in SendGrid is "interests" (snake_case)
        if (interestsString && interestsString.trim()) {
          // Try to find the field ID by fetching field definitions
          // For now, we'll use a placeholder that you'll need to replace
          // Call /api/sendgrid-fields to get your actual field IDs
          customFields.e1 = interestsString // TODO: Replace e1 with actual field ID
        }
        
        // Hear About Us field - field name is "hear_about_us" (snake_case)
        if (hearAboutUs && hearAboutUs.trim()) {
          customFields.e2 = hearAboutUs // TODO: Replace e2 with actual field ID
        }

        // Only add custom_fields if we have at least one
        if (Object.keys(customFields).length > 0) {
          contact.custom_fields = customFields
        }

        const contactData = {
          contacts: [contact]
        }

        console.log('📤 Attempting to save contact to SendGrid:', { 
          email, 
          firstName, 
          lastName, 
          phone: phone || 'not provided',
          country: country || 'not provided',
          interests: interestsString || 'none',
          hearAboutUs: hearAboutUs || 'not provided'
        })

        // Use fetch to call SendGrid Marketing Contacts API
        const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData)
        })

        const responseText = await response.text()
        
        if (response.ok) {
          let result
          try {
            result = JSON.parse(responseText)
          } catch {
            result = responseText
          }
          console.log('✅ Contact saved to SendGrid Marketing Contacts successfully')
          console.log('📋 Response:', result)
        } else {
          console.error('❌ SendGrid contact save FAILED')
          console.error('Status:', response.status, response.statusText)
          console.error('Response:', responseText)
          
          // Try to parse error for more details
          try {
            const errorData = JSON.parse(responseText)
            console.error('Error details:', errorData)
            
            // If it's a permissions error, log it clearly
            if (response.status === 403) {
              console.error('⚠️ PERMISSION ERROR: Your API key may not have Marketing Contacts permissions')
              console.error('⚠️ Go to SendGrid → Settings → API Keys → Edit your key')
              console.error('⚠️ Make sure "Marketing" or "Full Access" permissions are enabled')
            }
          } catch {
            // Error response is not JSON, that's okay
          }
          // Don't throw - continue with email sending
        }
      } catch (contactError: any) {
        console.error('❌ SendGrid contact save EXCEPTION:', contactError.message || contactError)
        console.error('Stack:', contactError.stack)
        // Continue even if contact save fails - we still want to send the email
      }
    } else {
      console.warn('⚠️ SENDGRID_API_KEY not set - skipping contact save')
    }

    // Send welcome email via SendGrid (REQUIRED for basic functionality)
    if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_FROM_EMAIL) {
      try {
        const msg = {
          to: email,
          from: {
            email: process.env.SENDGRID_FROM_EMAIL,
            name: 'Liqwid Finance'
          },
          subject: 'Welcome to Liqwifi',
          html: getWelcomeEmailTemplate({ firstName, lastName, email }),
          text: `Hi ${firstName},\n\nThank you for joining the Liqwifi waitlist. You're now among the first to access our platform when we launch.\n\nAs an early member, you'll receive priority onboarding, enhanced transaction limits, and exclusive early features before public release.\n\nLiqwifi will enable you to send and receive money locally and internationally, pay bills instantly, access loans based on your credit score, and grow your money through simple investments—all in one secure app.\n\nWe'll keep you updated on our progress and notify you as soon as we're ready to launch.\n\nThe Liqwifi Team`,
        }

        await sgMail.send(msg)
        console.log('✅ Welcome email sent via SendGrid')

        // Send admin notification email with form data (optional)
        if (process.env.SENDGRID_ADMIN_EMAIL) {
          try {
            const adminMsg = {
              to: process.env.SENDGRID_ADMIN_EMAIL,
              from: {
                email: process.env.SENDGRID_FROM_EMAIL,
                name: 'Liqwifi Waitlist'
              },
              subject: `New Waitlist Signup: ${firstName} ${lastName}`,
              html: `
                <h2>New Waitlist Signup</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Country:</strong> ${country || 'Not provided'}</p>
                <p><strong>Interests:</strong> ${interestsString || 'None'}</p>
                <p><strong>How did they hear about us:</strong> ${hearAboutUs || 'Not provided'}</p>
                <p><strong>Submitted:</strong> ${new Date(timestamp).toLocaleString()}</p>
              `,
              text: `New Waitlist Signup\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nCountry: ${country || 'Not provided'}\nInterests: ${interestsString || 'None'}\nHow did they hear about us: ${hearAboutUs || 'Not provided'}\nSubmitted: ${new Date(timestamp).toLocaleString()}`
            }
            await sgMail.send(adminMsg)
            console.log('✅ Admin notification email sent')
          } catch (adminError: any) {
            console.error('⚠️ Admin email error (non-critical):', adminError)
          }
        }
      } catch (emailError: any) {
        console.error('❌ SendGrid error:', emailError)
        // If email fails, we should still return success but log the error
        // The form submission was technically successful
      }
    } else {
      console.warn('⚠️ SendGrid not configured - emails will not be sent')
      // Return error if SendGrid is not configured (it's the minimum requirement)
      return NextResponse.json(
        { error: 'Email service not configured. Please set up SendGrid.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully joined the waitlist!' 
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    )
  }
}



