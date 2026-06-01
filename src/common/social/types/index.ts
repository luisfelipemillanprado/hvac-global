export type SocialNetwork = 'facebook' | 'instagram' | 'youtube' | 'x' | 'whatsapp' | 'tiktok'

export interface SocialLinksProps {
  links: readonly {
    ariaLabel: string
    href: string
    network: SocialNetwork
  }[]
}
