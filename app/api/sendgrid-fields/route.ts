import { NextResponse } from 'next/server'

/**
 * Helper endpoint to fetch SendGrid custom field IDs
 * 
 * Usage: Visit /api/sendgrid-fields in your browser or make a GET request
 * This will show you all your custom fields and their IDs
 */
export async function GET() {
  if (!process.env.SENDGRID_API_KEY) {
    return NextResponse.json(
      { error: 'SENDGRID_API_KEY not configured' },
      { status: 500 }
    )
  }

  try {
    const response = await fetch('https://api.sendgrid.com/v3/marketing/field_definitions', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        { 
          error: 'Failed to fetch field definitions',
          status: response.status,
          details: errorText
        },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    // Filter to show only custom fields (those starting with 'e')
    const customFields = data.custom_fields || []
    
    // Format the response nicely
    const formattedFields = customFields.map((field: any) => ({
      id: field.id,
      name: field.name,
      type: field.field_type,
      // Extract just the base ID (e1, e2, e3) without the type suffix
      baseId: field.id.split('_')[0]
    }))

    return NextResponse.json({
      success: true,
      message: 'Custom fields retrieved successfully',
      customFields: formattedFields,
      // Show which fields we're looking for
      lookingFor: {
        interests: formattedFields.find((f: any) => 
          f.name.toLowerCase().includes('interest')
        ),
        hearAboutUs: formattedFields.find((f: any) => 
          f.name.toLowerCase().includes('hear') || f.name.toLowerCase().includes('about')
        ),
      },
      // Full response for debugging
      fullResponse: data
    }, { status: 200 })

  } catch (error: any) {
    return NextResponse.json(
      { 
        error: 'Error fetching field definitions',
        message: error.message 
      },
      { status: 500 }
    )
  }
}
