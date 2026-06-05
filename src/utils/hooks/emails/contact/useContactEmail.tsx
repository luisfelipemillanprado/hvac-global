import { sendContactEmail } from '@/app/actions/sendContactEmail'
import { ContactEmailPayloadProps } from '@/utils/hooks/emails/types'

/**
 * @description Hook that provides a function to send contact emails using the sendContactEmail action.
 * Toast notifications disabled until the contact form UI is implemented (no @heroui/react).
 */
export function useContactEmail(onSuccess?: () => void) {
  const send = (payload: ContactEmailPayloadProps) => {
    return sendContactEmail({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      description: payload.description,
      honeypot: payload.honeypot,
    }).then((result) => {
      if (result.success) {
        onSuccess?.()
      }
    })
  }
  return send
}
