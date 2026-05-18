import type { Locale } from './locales'

export async function getMessages(locale: Locale) {
  const localMessages = (await import(`../../messages/${locale}.json`)).default

  return localMessages
}
