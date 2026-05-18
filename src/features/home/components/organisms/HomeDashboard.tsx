import { DashboardLayout } from '@/features/home/components/organisms/DashboardLayout'

export const HomeDashboard = () => {
  return (
    <main className="bg-shell min-h-screen w-full pt-27 md:pt-29 lg:pt-31">
      <section className="bg-shell mx-auto grid min-h-[calc(100vh-2rem)] w-full grid-rows-[minmax(0,1fr)] gap-4 px-5 py-4 sm:rounded-4xl sm:px-6 sm:py-4 lg:min-h-[760px] lg:gap-5 lg:rounded-4xl">
        <DashboardLayout />
      </section>
    </main>
  )
}
