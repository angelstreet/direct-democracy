import { Dashboard } from './dashboard'
import { AuthLayout } from '@/components/layout/auth-layout'

export default function DashboardPage() {
  return (
    <AuthLayout>
      <Dashboard />
    </AuthLayout>
  )
} 