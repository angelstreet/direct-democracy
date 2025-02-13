'use client'

import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, Vote, BarChart2, Brain, User } from 'lucide-react'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Logo } from './logo'

const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Polls', path: '/polls', icon: Vote },
  { name: 'Stats', path: '/stats', icon: BarChart2 },
  { name: 'AI Analysis', path: '/ai', icon: Brain },
]

export function NavMenu() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.path
              return (
                <button
                  key={item.path}
                  onClick={() => router.push(item.path)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium
                    ${isActive 
                      ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              )
            })}
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => router.push('/profile')}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 