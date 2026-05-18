import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'

import { routing } from './routing'
import { getMessages } from './utils'

export default getRequestConfig(async ({ requestLocale }) => {
  // The locale should already be negotiated by the middleware; here we only validate and consume it.
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

  return {
    locale,
    // Messages are loaded after the locale is resolved so server and client render the same language.
    messages: await getMessages(locale),
  }
})
