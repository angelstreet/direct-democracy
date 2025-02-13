import React from 'react'
import { BarChart, LineChart, Activity, Users, TrendingUp } from 'lucide-react'

const statsData = [
  { label: 'Total Votes', value: '125,430', change: '+12.5%', icon: Activity },
  { label: 'Active Users', value: '23,850', change: '+5.2%', icon: Users },
  { label: 'Engagement Rate', value: '68%', change: '+3.1%', icon: TrendingUp },
]

const recentPolls = [
  {
    id: 1,
    question: 'Should we increase funding for renewable energy?',
    category: 'Environment',
    votes: { yes: 72, no: 28, total: 2100 }
  },
  {
    id: 2,
    question: 'Should public transportation be free?',
    category: 'Transportation',
    votes: { yes: 65, no: 35, total: 1800 }
  },
  {
    id: 3,
    question: 'Support for universal basic income?',
    category: 'Economy',
    votes: { yes: 48, no: 52, total: 2400 }
  }
]

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {statsData.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-green-500 text-sm font-medium">{stat.change}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">vs last month</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Voting Trends */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Voting Trends</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              [LineChart Placeholder]
            </div>
          </div>

          {/* Category Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Category Distribution</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              [PieChart Placeholder]
            </div>
          </div>
        </div>

        {/* Recent Polls */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Polls</h3>
          <div className="space-y-4">
            {recentPolls.map((poll) => (
              <div key={poll.id} className="border-b dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium mb-1">{poll.question}</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {poll.category} • {poll.votes.total.toLocaleString()} votes
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-green-500">{poll.votes.yes}% Yes</span>
                    <span className="text-red-500">{poll.votes.no}% No</span>
                  </div>
                </div>
                <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div
                    className="bg-blue-500 h-1.5 rounded-full"
                    style={{ width: `${poll.votes.yes}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}