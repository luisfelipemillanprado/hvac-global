export type DashboardService = {
  title: string
  description: string
  metricValue: string
  metricUnit: string
  serviceId: string
  startDate: string
  startDateLabel?: string
  address: string
  addressLabel?: string
  href: string
  image: string
  imageAlt: string
}

export type DashboardProgressPanel = {
  title: string
  value: string
  unit: string
  detailsAriaLabel: string
  segments: readonly {
    label: string
    value: string
  }[]
}
