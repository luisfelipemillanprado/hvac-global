import { sendContactEmail } from '@/app/actions/sendContactEmail'
import { ContactEmailPayloadProps } from '@/utils/hooks/emails/types'
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import { toast } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description Hook that provides a function to send contact emails using the sendContactEmail action.
 * @public
 * @interface ContactEmailPayloadProps
 * @param {ContactEmailPayloadProps} payload - The contact email payload containing sender details and message.
 * @param {ContactEmailPayloadProps} name - The name of the person sending the contact email.
 * @param {ContactEmailPayloadProps} email - The email address of the person sending the contact email.
 * @param {ContactEmailPayloadProps} phone - The phone number of the person sending the contact email.
 * @param {ContactEmailPayloadProps} description - The message or description provided by the sender.
 * @param {ContactEmailPayloadProps} notifications - An object containing success and error notification details.
 * @param {ContactEmailPayloadProps} notifications.success - An object containing the description for a successful email send.
 * @param {ContactEmailPayloadProps} notifications.success.description - The description for the success notification.
 * @param {ContactEmailPayloadProps} notifications.error - An object containing the description for a failed email send.
 * @param {ContactEmailPayloadProps} notifications.error.description - The description for the error notification.
 * @param {function} [onSuccess] - Optional callback invoked after a successful email send (e.g., to reset the form).
 * @returns {{ send: function }} An object with the send function that returns a Promise.
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
        toast.success(payload.notifications.success.description, {
          indicator: (
            <CheckCircleIcon
              aria-hidden={'true'}
              role={'img'}
              className={clsx('fill-secondary size-6.5')}
            />
          ),
          timeout: 0,
        })
        onSuccess?.()
        return
      }
      const description =
        result.error === 'RATE_LIMITED'
          ? payload.notifications.rateLimit.description
          : payload.notifications.error.description
      toast.danger(description, {
        indicator: (
          <ExclamationTriangleIcon
            aria-hidden={'true'}
            role={'img'}
            className={clsx('fill-secondary size-6.5')}
          />
        ),
        timeout: 0,
      })
    })
  }
  return send
}
