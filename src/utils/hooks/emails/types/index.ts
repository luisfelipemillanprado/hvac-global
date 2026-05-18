/**
 * @description Represents the payload structure for sending a contact email.
 * @export
 * @interface ContactEmailPayloadProps
 * @property {string} name - The name of the person sending the contact email.
 * @property {string} email - The email address of the person sending the contact email.
 * @property {string} phone - The phone number of the person sending the contact email.
 * @property {string} description - The message or description provided by the sender.
 * @property {object} notifications - An object containing success and error notification details.
 * @property {object} notifications.success - An object containing the description for a successful email send.
 * @property {string} notifications.success.description - The description for the success notification.
 * @property {object} notifications.error - An object containing the description for a failed email send.
 * @property {string} notifications.error.description - The description for the error notification.
 */
export interface ContactEmailPayloadProps {
  name: string
  email: string
  phone: string
  description: string
  honeypot?: string
  notifications: {
    success: { description: string }
    error: { description: string }
    rateLimit: { description: string }
  }
}
