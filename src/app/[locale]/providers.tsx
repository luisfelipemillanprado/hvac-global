'use client'
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes'
import { ReactNode } from 'react'

/**
 * @description Represents the props for the Providers component.
 * @export
 * @interface ProvidersProps
 * @property {ReactNode} children - The child components to be wrapped by the Providers component.
 * @property {ThemeProviderProps} [themeProps] - Optional props to be passed to the NextThemesProvider.
 */
export interface ProvidersProps {
  children: ReactNode
  themeProps?: ThemeProviderProps
}

/**
 * @description Renders the Providers component that wraps its children with the NextThemesProvider for theme management.
 * @public
 * @interface ProvidersProps
 * @param {object} props - Component properties.
 * @param {ProvidersProps['children']} props.children - The child components to be wrapped by the Providers component.
 * @param {ProvidersProps['themeProps']} [props.themeProps] - Optional props to be passed to the NextThemesProvider.
 * @returns  The rendered Providers component with the NextThemesProvider wrapping the children.
 */
export const Providers = ({ children, themeProps }: ProvidersProps) => {
  return <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
}
