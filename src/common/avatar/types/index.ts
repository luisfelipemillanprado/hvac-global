export interface AvatarStackProps {
  avatars: readonly {
    id: string | number
    image: string
    imageAlt: string
  }[]
  ariaLabel: string
}
