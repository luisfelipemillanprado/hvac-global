import { DashboardLayout } from '@/features/home/components/organisms/DashboardLayout'

export const HomeDashboard = () => {
  return (
    <main className="bg-canvas min-h-screen lg:h-svh lg:overflow-hidden">
      <div className="bg-surface-inset shadow-flyout border-line min-h-0 rounded-4xl border p-4 pt-26 lg:h-full lg:overflow-hidden">
        <DashboardLayout />
      </div>
    </main>
  )
}
