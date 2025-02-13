import { PollSwipe } from './polls'
import { AuthLayout } from '@/components/layout/auth-layout'

export default function PollsPage() {
  return (
    <AuthLayout>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8 text-center">Today's Polls</h1>
        <PollSwipe />
      </div>
    </AuthLayout>
  )
} 