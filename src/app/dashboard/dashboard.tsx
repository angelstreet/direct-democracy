'use client'

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
    <div className="max-w-7xl mx-auto px-4 py-4">
      {/* Stats Cards - More compact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {statsData.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
                  <h3 className="text-xl font-bold mt-0.5">{stat.value}</h3>
                  <span className="text-green-500 text-xs font-medium">{stat.change}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs ml-1">vs last month</span>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts Section - More compact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* Voting Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h3 className="text-sm font-semibold mb-3">Voting Trends</h3>
          <div className="h-48 flex items-center justify-center text-gray-500 text-sm">
            [LineChart Placeholder]
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h3 className="text-sm font-semibold mb-3">Category Distribution</h3>
          <div className="h-48 flex items-center justify-center text-gray-500 text-sm">
            [PieChart Placeholder]
          </div>
        </div>
      </div>

      {/* Recent Polls */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h3 className="text-sm font-semibold mb-3">Recent Polls</h3>
        <div className="space-y-3">
          {recentPolls.map((poll) => (
            <div key={poll.id} className="border-b dark:border-gray-700 last:border-0 pb-3 last:pb-0">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium mb-0.5">{poll.question}</h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {poll.category} • {poll.votes.total.toLocaleString()} votes
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-green-500">{poll.votes.yes}% Yes</span>
                  <span className="text-red-500">{poll.votes.no}% No</span>
                </div>
              </div>
              <div className="mt-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                <div
                  className="bg-blue-500 h-1 rounded-full"
                  style={{ width: `${poll.votes.yes}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}