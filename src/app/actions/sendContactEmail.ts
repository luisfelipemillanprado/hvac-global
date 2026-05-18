'use server'
import { AwsSdkErrorProps, ContactEmailProps } from '@/app/actions/types'
import { checkContactUsRateLimit } from '@/utils/security/emails/contact-us/ContactUsRateLimit'
import { contactUsTemplate } from '@/utils/templates/emails/contact-us/ContactUsTemplate'
import { validateContactPayload } from '@/utils/validators/forms/contact/ContactUsValidator'
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2'
import { NodeHttpHandler } from '@smithy/node-http-handler'
import https from 'https'
import { headers } from 'next/headers'
import 'server-only'

/**
 * @description Initializes an AWS SESv2 client with custom configuration.
 * @constant sesClient
 * @property {string} region - The AWS region where SES is configured (from environment variables).
 * @property {NodeHttpHandler} requestHandler - Custom HTTP handler with specific timeouts and connection settings.
 * @property {https.Agent} httpsAgent - Custom HTTPS agent for connection pooling and keep-alive.
 * @property {number} maxAttempts - Maximum number of retry attempts for failed requests (set to 3).
 * @see {@link SESv2Client}
 * @see {@link NodeHttpHandler}
 * @see {@link https.Agent}
 */
const sesClient = new SESv2Client({
  region: process.env.AWS_REGION,
  requestHandler: new NodeHttpHandler({
    connectionTimeout: 5000,
    socketTimeout: 10000,
    httpsAgent: new https.Agent({
      keepAlive: true,
      maxSockets: 5,
    }),
  }),
  maxAttempts: 3,
})

/**
 * @description Resolves the best-effort client IP from platform-provided request headers.
 * @private
 * @returns {Promise<string>} - The detected client IP, or `'unknown'` when no header is present.
 */
const resolveClientIp = async (): Promise<string> => {
  const headerList = await headers()
  const forwarded = headerList.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]!.trim()
  return headerList.get('x-real-ip')?.trim() || 'unknown'
}

/**
 * @description Sends a contact email through AWS SES after enforcing honeypot, rate limit and payload validation.
 * @public
 * @interface ContactEmailProps
 * @param {ContactEmailProps} payload - The contact email payload containing sender details and message.
 * @param {ContactEmailProps['name']} payload.name - The sender's full name.
 * @param {ContactEmailProps['email']} payload.email - The sender's email address (from the contact form).
 * @param {ContactEmailProps['phone']} payload.phone - The sender's phone number (from the contact form).
 * @param {ContactEmailProps['description']} payload.description - The message or description provided by the sender.
 * @param {ContactEmailProps['honeypot']} [payload.honeypot] - Hidden anti-bot field; non-empty values silently drop the request.
 * @returns {Promise<{ success: true } | { success: false; error: string }>} - Resolves with the operation outcome.
 */
export async function sendContactEmail(
  payload: ContactEmailProps
): Promise<{ success: true } | { success: false; error: string }> {
  try {
    if (typeof payload?.honeypot === 'string' && payload.honeypot.trim().length > 0) {
      return { success: true }
    }
    const ip = await resolveClientIp()
    const rate = checkContactUsRateLimit(ip)
    if (!rate.allowed) {
      return { success: false, error: 'RATE_LIMITED' }
    }
    const validation = validateContactPayload(payload)
    if (!validation.valid) {
      return { success: false, error: 'INVALID_PAYLOAD' }
    }
    const FROM = process.env.SES_FROM_EMAIL
    const TO = process.env.SES_TO_EMAIL
    if (!FROM || !TO) {
      throw new Error('SES Email Environment Variables Are Not Defined')
    }
    const command = new SendEmailCommand({
      FromEmailAddress: FROM,
      ReplyToAddresses: [payload.email],
      Destination: {
        ToAddresses: [TO],
      },
      Content: {
        Simple: {
          Subject: {
            Data: 'New Appointment Request',
            Charset: 'UTF-8',
          },
          Body: {
            Html: { Data: contactUsTemplate(payload).html, Charset: 'UTF-8' },
            Text: { Data: contactUsTemplate(payload).text, Charset: 'UTF-8' },
          },
        },
      },
    })
    await sesClient.send(command)
    return { success: true }
  } catch (error: unknown) {
    const err = error as AwsSdkErrorProps
    console.error('[SES_V2_SEND_EMAIL_ERROR]', err)
    return {
      success: false,
      error: 'EMAIL_SEND_FAILED',
    }
  }
}
