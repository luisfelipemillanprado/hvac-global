import { Providers } from '@/app/[locale]/providers'
import { DashboardShellHeader } from '@/common/navbar/components/organisms/DashboardShellHeader'
import { routing } from '@/i18n/routing'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { hasLocale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Poppins, Reenie_Beanie } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'

const { copy, navbar } = homeAssets.dashboard

/**
 * @description Loads the Poppins font with specified weights and subsets for use in the application.
 * @constant
 * @type {ReturnType<typeof Poppins>}
 * @property {string} variable - The CSS variable name for the font.
 * @property {string[]} weight - The font weights to include (200–900).
 * @property {string[]} subsets - The language subsets to include (e.g., 'latin').
 * @property {string} display - The font display strategy ('swap').
 */
const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

/**
 * @description Loads the Reenie_Beanie font with specified weights and subsets for use in the application.
 * @constant
 * @type {ReturnType<typeof Reenie_Beanie>}
 * @property {string} variable - The CSS variable name for the font.
 * @property {string[]} weight - The font weights to include (400).
 * @property {string[]} subsets - The language subsets to include (e.g., 'latin').
 * @property {string} display - The font display strategy ('swap').
 */
const reenieBeanie = Reenie_Beanie({
  variable: '--font-reenie-beanie',
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

/**
 * @description Generates metadata for the application based on the current locale, using i18n translations.
 * @public
 * @param {object} props - The props object containing route params.
 * @param {Promise<{locale: string}>} props.params - The route parameters containing the locale.
 * @param {string} props.params.locale - The current locale extracted from the route parameters.
 * @returns {Promise<{title: string, description: string}>} The localized metadata for SEO and browser display.
 */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  const t = await getTranslations({ locale, namespace: 'home.Metadata' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

/**
 * @description RootLayout component that wraps the entire application with global providers.
 * @public
 * @param {object} props - The props object containing the children to be rendered within the layout.
 * @param {React.ReactNode} props.children - The React node(s) to be rendered within the layout.
 * @returns {JSX.Element} The rendered RootLayout component.
 */
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  return (
    <html
      suppressHydrationWarning
      lang={locale}
      className={clsx(reenieBeanie.variable, poppins.className, poppins.variable)}
    >
      <body className={clsx('relative')}>
        <Providers
          themeProps={{
            attribute: 'class',
            defaultTheme: 'dark',
            enableSystem: false,
            themes: ['dark', 'light'],
          }}
        >
          <DashboardShellHeader
            href={navbar.brandHref}
            label={navbar.brandLabel}
            logo={navbar.brandLogo}
            logoAlt={navbar.brandLogoAlt}
            menuCloseAriaLabel={copy.menuCloseAriaLabel}
            menuOpenAriaLabel={copy.menuOpenAriaLabel}
            navAriaLabel={copy.serviceNavigationAriaLabel}
            navLinks={navbar.links}
            themeToggleAriaLabel={copy.themeToggleAriaLabel}
          />
          {children}
        </Providers>
      </body>
    </html>
  )
}
