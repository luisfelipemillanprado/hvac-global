export type PopularServiceIcon = 'repair' | 'maintenance' | 'installation' | 'airQuality'

export interface PopularServiceCardProps {
  icon: PopularServiceIcon
  image: string
  imageAlt: string
  rating: string
  ratingAriaLabel: string
  title: string
}
