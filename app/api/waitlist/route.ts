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
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Liqwifi Waitlist</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #F9FAFB;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #F9FAFB; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #FFFFFF; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
          <!-- Header with gradient background -->
          <tr>
            <td style="background: linear-gradient(135deg, #9ECE58 0%, #93E4F1 100%); padding: 40px 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-size: 32px; font-weight: 700; letter-spacing: -1px;">Welcome to Liqwifi! 🎉</h1>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; color: #0F0F0F; font-size: 18px; line-height: 28px; font-weight: 500;">
                Hi ${data.firstName},
              </p>
              
              <p style="margin: 0 0 20px; color: #4B4B57; font-size: 16px; line-height: 27px;">
                Thank you for joining the Liqwifi waitlist! We're thrilled to have you on board as we build the future of finance.
              </p>
              
              <p style="margin: 0 0 20px; color: #4B4B57; font-size: 16px; line-height: 27px;">
                By joining early, you'll be among the first to experience:
              </p>
              
              <ul style="margin: 0 0 30px; padding-left: 20px; color: #4B4B57; font-size: 16px; line-height: 27px;">
                <li style="margin-bottom: 12px;">✨ <strong>Priority onboarding</strong> when we launch</li>
                <li style="margin-bottom: 12px;">🚀 <strong>Better transaction limits</strong> for early members</li>
                <li style="margin-bottom: 12px;">💎 <strong>Exclusive early features</strong> before public release</li>
                <li style="margin-bottom: 12px;">🎁 <strong>Special perks</strong> as a thank you for your early support</li>
              </ul>
              
              <div style="background: linear-gradient(135deg, rgba(158, 206, 88, 0.1) 0%, rgba(147, 228, 241, 0.1) 100%); border-radius: 12px; padding: 24px; margin: 30px 0; border-left: 4px solid #9ECE58;">
                <p style="margin: 0; color: #0F0F0F; font-size: 16px; line-height: 27px; font-weight: 500;">
                  We're building something amazing that will let you send and receive money locally and internationally, pay bills in seconds, unlock instant loans with your credit score, and grow your money with simple investments—all from one secure app.
                </p>
              </div>
              
              <p style="margin: 30px 0 20px; color: #4B4B57; font-size: 16px; line-height: 27px;">
                We'll keep you updated on our progress and notify you as soon as Liqwifi is ready. In the meantime, feel free to reach out if you have any questions.
              </p>
              
              <p style="margin: 0; color: #4B4B57; font-size: 16px; line-height: 27px;">
                Welcome aboard!<br>
                <strong style="color: #0F0F0F;">The Liqwifi Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #F9FAFB; padding: 30px 40px; text-align: center; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0 0 12px; color: #4B4B57; font-size: 14px; line-height: 20px;">
                You're receiving this email because you joined the Liqwifi waitlist.
              </p>
              <p style="margin: 0; color: #9CA3AF; font-size: 12px; line-height: 18px;">
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

    // Save to Google Sheets
    if (
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SPREADSHEET_ID
    ) {
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
      } catch (sheetsError) {
        console.error('Google Sheets error:', sheetsError)
        // Continue even if Sheets fails - we still want to send the email
      }
    }

    // Send welcome email via SendGrid (REQUIRED for basic functionality)
    if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_FROM_EMAIL) {
      try {
        const msg = {
          to: email,
          from: process.env.SENDGRID_FROM_EMAIL,
          subject: 'Welcome to the Liqwifi Waitlist! 🎉',
          html: getWelcomeEmailTemplate({ firstName, lastName, email }),
          text: `Hi ${firstName},\n\nThank you for joining the Liqwifi waitlist! We're thrilled to have you on board as we build the future of finance.\n\nBy joining early, you'll be among the first to experience priority onboarding, better transaction limits, exclusive early features, and special perks.\n\nWe'll keep you updated on our progress and notify you as soon as Liqwifi is ready.\n\nWelcome aboard!\nThe Liqwifi Team`,
        }

        await sgMail.send(msg)
        console.log('✅ Welcome email sent via SendGrid')
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
