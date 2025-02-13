'use client'

import React from 'react'
import { Globe, ChevronRight, Lock, LineChart, BarChart } from 'lucide-react'

export function LandingPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="w-20"></div>
        
        <div className="flex items-center space-x-2">
          <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <span className="text-xl font-bold">DirectDemocracy</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-sm px-3 py-1.5 text-gray-600 dark:text-gray-300 hover:text-gray-900 border border-gray-300 dark:border-gray-600 rounded"
          >
            Login
          </button>
          
          <select className="appearance-none bg-transparent border-none cursor-pointer text-xl outline-none focus:ring-0 hover:opacity-80">
            <option value="us">🇺🇸</option>
            <option value="fr">🇫🇷</option>
            <option value="de">🇩🇪</option>
            <option value="gb">🇬🇧</option>
            <option value="es">🇪🇸</option>
          </select>
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
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 flex items-center mx-auto">
            Get Started
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Example Poll */}
        <div className="max-w-2xl mx-auto mb-24">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                  <span className="text-lg font-semibold">Global Poll Example</span>
                </div>
                <span className="text-sm text-gray-500">2.1M votes</span>
              </div>
              
              <h3 className="text-xl font-bold mb-6">
                Should governments prioritize renewable energy investment?
              </h3>

              <div className="space-y-4">
                <div className="relative">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Yes</span>
                      <span className="font-medium">72%</span>
                    </div>
                    <div className="absolute top-0 left-0 h-full bg-green-100 dark:bg-green-900/30 rounded-lg" 
                         style={{width: '72%', zIndex: 0}}></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">No</span>
                      <span className="font-medium">28%</span>
                    </div>
                    <div className="absolute top-0 left-0 h-full bg-red-100 dark:bg-red-900/30 rounded-lg" 
                         style={{width: '28%', zIndex: 0}}></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t dark:border-gray-700">
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex space-x-4">
                    <span>🇺🇸 76%</span>
                    <span>🇫🇷 70%</span>
                    <span>🇩🇪 74%</span>
                    <span>🇬🇧 68%</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    View All →
                  </button>
                </div>
              </div>
            </div>
          </div>
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

        {/* How it Works */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, text: "Create your anonymous profile" },
              { step: 2, text: "Vote on trending political issues" },
              { step: 3, text: "See real-time results" },
              { step: 4, text: "Compare with AI policy analysis" }
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mb-4">
                  {item.step}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-xl p-8 text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Make Your Voice Heard?</h2>
          <p className="mb-6">Join thousands of citizens shaping the future of democracy.</p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50">
            Create Your Account
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Our Mission</li>
                <li>How It Works</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Help Center</li>
                <li>Blog</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Support</li>
                <li>Feedback</li>
                <li>Social Media</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 DirectDemocracy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}