import { PollSwipe } from '@/components/polls/swipe'

export default function PollsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8 text-center">Today's Polls</h1>
        <PollSwipe />
      </div>
    </div>
  )
}