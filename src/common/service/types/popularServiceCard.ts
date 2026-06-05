export type PopularServiceIcon = 'repair' | 'maintenance' | 'installation' | 'airQuality'

export interface PopularServiceCardProps {
  icon: PopularServiceIcon
  image: string
  imageAlt: string
  ratingAriaLabel: string
  ratingValue: string
  title: string
}
