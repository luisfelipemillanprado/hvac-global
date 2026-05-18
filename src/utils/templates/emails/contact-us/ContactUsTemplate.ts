import { ContactEmailProps } from '@/app/actions/types'
import { safeHtml } from '@/utils/validators/forms/contact/ContactUsValidator'

/**
 * @description Generates the HTML and plain text content for a contact email template.
 * @public
 * @interface ContactEmailProps
 * @param {ContactEmailProps} payload - The contact email payload containing sender details and message.
 * @param {ContactEmailProps['name']} payload.name - The sender's full name.
 * @param {ContactEmailProps['email']} payload.email - The sender's email address (from the contact form).
 * @param {ContactEmailProps['phone']} payload.phone - The sender's phone number (from the contact form).
 * @param {ContactEmailProps['description']} payload.description - The message or description provided by the sender.
 * @returns {{ html: string; text: string }} An object with `html` and `text` properties.
 */
export const contactUsTemplate = (payload: ContactEmailProps): { html: string; text: string } => {
  return {
    html: safeHtml`<!DOCTYPE html>
            <html lang="en-US">
            <head>
            <meta charset="UTF-8" />
            </head>
            <body style="margin:0;padding:0;background-color:#f3f1eb;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
            <td align="center" style="padding:24px;">
            <!-- Card -->
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
            style="max-width:600px;background:#ffffff;border-radius:8px;padding:32px;">
            <!-- Title -->
            <tr>
            <td align="center" style="padding-bottom:16px;">
            <h1 style="margin:0;font-family:Arial,sans-serif;font-size:24px;color:#1A1B1B;">
            New Appointment Request.
            </h1>
            </td>
            </tr>
            <!-- Divider -->
            <tr>
            <td style="padding:16px 0;">
            <hr style="border:none;border-top:1px solid #e5e5e5;" />
            </td>
            </tr>
            <!-- Content -->
            <tr>
            <td style="font-family:Arial,sans-serif;font-size:14px;color:#323232;line-height:1.6;">
            <p><strong>Name:</strong> ${payload.name}</p>
            <p><strong>Email:</strong> ${payload.email}</p>
            <p><strong>Phone:</strong> ${payload.phone}</p>
            <p><strong>Message:</strong></p>
            <p>${payload.description}</p>
            </td>
            </tr>
            <!-- Signature -->
            <tr>
            <td style="font-family:Arial,sans-serif;font-size:14px;color:#323232;">
            <p style="margin-bottom:4px;">Best,</p>
            <p style="margin-top:0;"><strong>Your Company</strong></p>
            </td>
            </tr>
            </table>
            </td>
            </tr>
            </table>
            </body>
            </html>
          `.trim(),
    text: [
      'New Appointment Request:',
      '------------------------',
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Message: ${payload.description}`,
    ].join('\n'),
  }
}
