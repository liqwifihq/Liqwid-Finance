import { NextResponse } from 'next/server'

/**
 * Test endpoint to verify Google Sheets webhook integration
 * 
 * Usage: GET /api/test-google-sheets
 * This will test the webhook connection and show detailed diagnostics
 */
export async function GET() {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

  if (!webhookUrl) {
    return NextResponse.json({
      success: false,
      error: 'GOOGLE_SHEETS_WEBHOOK_URL environment variable is not set',
      instructions: [
        '1. Go to Vercel → Settings → Environment Variables',
        '2. Add GOOGLE_SHEETS_WEBHOOK_URL',
        '3. Set value to your Google Apps Script web app URL',
        '4. Redeploy the project'
      ]
    }, { status: 400 })
  }

  // Test data
  const testData = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '1234567890',
    country: 'USA',
    interests: 'Testing',
    hearAboutUs: 'API Test'
  }

  try {
    console.log('🧪 Testing Google Sheets webhook...')
    console.log('🧪 URL:', webhookUrl)
    console.log('🧪 Test data:', JSON.stringify(testData, null, 2))

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    const responseText = await response.text()
    const responseHeaders = Object.fromEntries(response.headers.entries())

    let parsedResponse
    try {
      parsedResponse = JSON.parse(responseText)
    } catch {
      parsedResponse = { raw: responseText.substring(0, 500) }
    }

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      statusText: response.statusText,
      webhookUrl: webhookUrl.substring(0, 50) + '...',
      requestData: testData,
      response: {
        headers: responseHeaders,
        body: parsedResponse,
        rawBody: responseText.substring(0, 500),
      },
      diagnostics: {
        isOk: response.ok,
        contentType: responseHeaders['content-type'],
        isJson: typeof parsedResponse === 'object' && !parsedResponse.raw,
        hasError: !response.ok,
      },
      recommendations: response.ok 
        ? ['✅ Webhook is working! Check your Google Sheet for the test data.']
        : [
            '❌ Webhook returned an error',
            response.status === 401 || response.status === 403 
              ? '→ Check Apps Script deployment permissions (should be "Anyone")'
              : '',
            response.status === 404
              ? '→ Verify the webhook URL is correct'
              : '',
            response.status >= 500
              ? '→ Check Apps Script execution logs for errors'
              : '',
          ].filter(Boolean)
    }, { status: response.ok ? 200 : 500 })

  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      errorType: error.name,
      webhookUrl: webhookUrl.substring(0, 50) + '...',
      diagnostics: {
        isTimeout: error.name === 'AbortError',
        isNetworkError: error.message?.includes('fetch failed'),
      },
      recommendations: [
        error.name === 'AbortError' 
          ? '→ Webhook timed out (check Apps Script execution time)'
          : '',
        error.message?.includes('fetch failed')
          ? '→ Network/CORS error - check Apps Script deployment settings'
          : '',
        '→ Verify the webhook URL is accessible',
        '→ Check Apps Script execution logs',
      ].filter(Boolean)
    }, { status: 500 })
  }
}

