import { DashboardLayout } from '@/features/home/components/organisms/DashboardLayout'

export const HomeDashboard = () => {
  return (
    <main className="bg-night min-h-screen w-full lg:h-svh lg:overflow-hidden">
      <section className="mx-auto grid w-full lg:h-full lg:min-h-0">
        <DashboardLayout />
      </section>
    </main>
  )
}
