'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Globe, ChevronRight, Lock, LineChart, BarChart } from 'lucide-react'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Login } from '@/components/auth/login'
import { Logo } from '@/components/layout/logo'

export function Landing() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="w-20"></div>
        <Logo />
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-sm px-3 py-1.5 text-gray-600 dark:text-gray-300 hover:text-gray-900 border border-gray-300 dark:border-gray-600 rounded"
          >
            Login
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Direct Democracy
            <br />
            <span className="text-blue-600 dark:text-blue-400">By the People, For the People</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Shape the future of your country through secure, anonymous polling.
            Your voice matters in building better policies.
          </p>
          <button 
            onClick={handleGetStarted}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 flex items-center mx-auto"
          >
            Get Started
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <Lock className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Anonymous & Secure</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your privacy is guaranteed. Share your opinions without sharing your identity.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <LineChart className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Insights</h3>
            <p className="text-gray-600 dark:text-gray-300">
              See how your country thinks about key issues as they emerge.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <BarChart className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Compare policies and opinions across different countries.
            </p>
          </div>
        </div>

        {/* Login Modal */}
        {isModalOpen && <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-between gap-4">
            <div>
              <h4 className="font-semibold mb-2">About</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>Our Mission</li>
                <li>How It Works</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Resources</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>Help Center</li>
                <li>Blog</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>Support</li>
                <li>Feedback</li>
                <li>Social Media</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 Direct Democracy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 