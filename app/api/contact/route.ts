import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      email,
      phone,
      service,
      message,
    } = body

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'sayedmuddassir68@gmail.com',
      subject: `New Lead from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>

        <h3>Message:</h3>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send email',
      },
      {
        status: 500,
      }
    )
  }
}