import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const REQUIRED_ENV = ['SMTP_USER', 'SMTP_PASS'] as const

export async function POST(req: NextRequest) {
  for (const key of REQUIRED_ENV) {
    if (!process.env[key]) {
      console.error(`[contact] Missing env var: ${key}`)
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
    }
  }

  let body: { name?: string; email?: string; message?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, email, message } = body

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // sends to yourself
      replyTo: `"${name}" <${email}>`,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px;">
          <h2 style="margin:0 0 24px;font-size:20px;color:#111;">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;font-size:13px;color:#555;width:80px;vertical-align:top;">Name</td>
              <td style="padding:8px 0;font-size:14px;color:#111;font-weight:500;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-size:13px;color:#555;vertical-align:top;">Email</td>
              <td style="padding:8px 0;font-size:14px;color:#111;">
                <a href="mailto:${email}" style="color:#1d4ed8;">${email}</a>
              </td>
            </tr>
          </table>
          <hr style="margin:20px 0;border:none;border-top:1px solid #e5e7eb;"/>
          <p style="font-size:13px;color:#555;margin:0 0 8px;">Message</p>
          <p style="font-size:15px;color:#111;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb;"/>
          <p style="font-size:12px;color:#999;margin:0;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] SMTP error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
