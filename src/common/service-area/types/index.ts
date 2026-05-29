export interface ServiceAreaSectionProps {
  description: string
  mapEmbedUrl: string
  mapTitle: string
  technicianAvatars: readonly {
    alt: string
    src: string
  }[]
  technicianCount: string
  techniciansLabel: string
  title: string
  viewMapAriaLabel: string
  viewMapHref: string
  viewMapLabel: string
}
