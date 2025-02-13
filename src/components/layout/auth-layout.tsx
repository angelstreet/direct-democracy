import { NavMenu } from './nav-menu'
import { Footer } from './footer'

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <NavMenu />
      <main className="flex-1 pt-6">
        {children}
      </main>
      <Footer />
    </div>
  )
} 