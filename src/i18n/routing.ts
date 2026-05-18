import { defineRouting } from 'next-intl/routing'

import { defaultLocale, locales } from './locales'

export const routing = defineRouting({
  // Shared list of locales used by middleware, navigation helpers and request config.
  locales: [...locales],
  // Fallback locale when neither the URL, nor cookie, nor browser language match.
  defaultLocale,
  // Keep locale negotiation enabled so next-intl can use cookie first and browser language second.
  localeDetection: true,

  // refer to https://next-intl.dev/docs/routing/configuration#pathnames for more details on how to configure pathnames
  pathnames: {},
})
