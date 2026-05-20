export interface ServiceCardMarkProps {
  mark: string
}

export interface ServiceCardProps {
  title: string
  description: string
  ctaLabel: string
  href: string
  image: string
  imageAlt: string
  mark: string
  reviewAvatars: readonly {
    id: string | number
    image: string
    imageAlt: string
  }[]
  reviewersAriaLabel: string
}
