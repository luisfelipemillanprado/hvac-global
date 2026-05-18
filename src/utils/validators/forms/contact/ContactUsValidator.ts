import { ContactEmailProps } from '@/app/actions/types'
import { ValidateReturns } from '@/utils/validators/types'

/**
 * @description Maximum allowed length per contact form field, enforced before any regex check.
 * @public
 * @constant CONTACT_FIELD_MAX_LENGTHS
 * @property {number} name - Maximum allowed characters for the sender's name.
 * @property {number} email - Maximum allowed characters for the email address (RFC 5321).
 * @property {number} phone - Maximum allowed characters for the raw phone number input.
 * @property {number} description - Maximum allowed characters for the message body.
 */
export const CONTACT_FIELD_MAX_LENGTHS = {
  name: 100,
  email: 254,
  phone: 30,
  description: 400,
} as const

/**
 * @description Validates a name string to ensure it meets minimum length requirements.
 * @private
 * @interface ValidateReturns
 * @param {string} value - The name string to validate
 * @returns {ValidateReturns} - An error message if validation fails, or null if the name is valid
 */
export const validateName = (value: string): ValidateReturns => {
  if (!value || value.trim().length < 3) {
    return 'Name must be at least 3 characters'
  }
  return null
}

/**
 * @description Validates an email address against a standard email format regex pattern.
 * @private
 * @interface ValidateReturns
 * @param {string} value - The email address string to validate
 * @returns {ValidateReturns} - A string containing an error message if the email is invalid, or null if the email is valid
 */
export const validateEmail = (value: string): ValidateReturns => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  if (!emailRegex.test(value)) {
    return 'Please enter a valid email address'
  }
  return null
}

/**
 * @description Validates a phone number string to ensure it matches common US phone number formats.
 * @private
 * @interface ValidateReturns
 * @param {string} value - The phone number string to validate
 * @returns {ValidateReturns} - A string containing an error message if the phone number is invalid.
 */
export const validatePhone = (value: string): ValidateReturns => {
  const cleanValue = value.replace(/[^\d+]/g, '').replace(/(?!^)\+/g, '')
  const usPhoneRegex = /^(?:\+1|1)?[2-9]\d{2}[2-9]\d{6}$/
  if (!usPhoneRegex.test(cleanValue)) {
    return 'Please enter a valid US phone number'
  }
  return null
}

/**
 * @description Validates a message string to ensure it does not exceed the specified character limit.
 * @public
 * @interface ValidateReturns
 * @param {number} charactersLimit - The maximum number of characters allowed in the message.
 * @param {string} value - The message string to validate.
 * @returns {ValidateReturns} - A validator function that takes a string value and returns an error message.
 */
export const validateMessage =
  (charactersLimit: number) =>
  (value: string): ValidateReturns => {
    if (value.length > charactersLimit) {
      return `Maximum ${charactersLimit} characters allowed`
    }
    return null
  }

/**
 * @description Validates the full contact form payload on the server, combining length caps with the per-field validators.
 * @public
 * @param {ContactEmailProps} payload - Payload to validate, typically received by a Server Action.
 * @returns {{ valid: true } | { valid: false; reason: string }} - Validation outcome with a generic reason on failure.
 */
export const validateContactPayload = (
  payload: ContactEmailProps
): { valid: true } | { valid: false; reason: string } => {
  if (
    typeof payload?.name !== 'string' ||
    typeof payload?.email !== 'string' ||
    typeof payload?.phone !== 'string' ||
    typeof payload?.description !== 'string'
  ) {
    return { valid: false, reason: 'INVALID_SHAPE' }
  }
  if (
    payload.name.length > CONTACT_FIELD_MAX_LENGTHS.name ||
    payload.email.length > CONTACT_FIELD_MAX_LENGTHS.email ||
    payload.phone.length > CONTACT_FIELD_MAX_LENGTHS.phone ||
    payload.description.length > CONTACT_FIELD_MAX_LENGTHS.description
  ) {
    return { valid: false, reason: 'PAYLOAD_TOO_LARGE' }
  }
  const errors = [
    validateName(payload.name),
    validateEmail(payload.email),
    validatePhone(payload.phone),
    validateMessage(CONTACT_FIELD_MAX_LENGTHS.description)(payload.description),
  ].filter((error): error is string => error !== null)
  if (errors.length > 0) {
    return { valid: false, reason: 'INVALID_FIELD' }
  }
  return { valid: true }
}

/**
 * @description Escapes special HTML characters in a string to their corresponding HTML entities.
 * @private
 * @param {string} value - The input string to escape.
 * @returns {string} - The escaped string with special HTML characters replaced by their entities.
 */
const escapeHtml = (value: string): string => {
  return value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }
    return map[char] ?? char
  })
}

/**
 * @description Validates and sanitizes a template string by escaping any embedded values to prevent HTML injection.
 * @public
 * @param {TemplateStringsArray} strings - An array of string literals from the template.
 * @param {...string[]} values - The values to be interpolated into the template, which will be escaped.
 * @returns {string} - The resulting HTML string with all interpolated values safely escaped.
 */
export const safeHtml = (strings: TemplateStringsArray, ...values: string[]): string => {
  return strings.reduce((result, stringPart, i) => {
    const value = values[i]
    return result + stringPart + (value !== undefined ? escapeHtml(value) : '')
  }, '')
}
