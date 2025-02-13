import React from 'react'
import { User, Settings, Lock, Bell, Globe } from 'lucide-react'

export function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
                <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold">My Profile</h1>
                <p className="text-gray-500 dark:text-gray-400">Manage your account settings and preferences</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Profile completion</span>
              <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Age Range
                </label>
                <select className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                  <option>18-24</option>
                  <option>25-34</option>
                  <option>35-44</option>
                  <option>45-54</option>
                  <option>55+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your city"
                  className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Primary Transportation
              </label>
              <select className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                <option>Public Transport</option>
                <option>Private Car (Electric)</option>
                <option>Private Car (Gas)</option>
                <option>Bicycle</option>
                <option>Walking</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Political Leaning
              </label>
              <select className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                <option>Left</option>
                <option>Center-Left</option>
                <option>Center</option>
                <option>Center-Right</option>
                <option>Right</option>
                <option>Prefer not to say</option>
              </select>
            </div>
          </form>
        </div>

        {/* Preferences */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b dark:border-gray-700">
              <div className="flex items-center">
                <Bell className="w-5 h-5 text-gray-500 mr-3" />
                <div>
                  <h3 className="font-medium">Notifications</h3>
                  <p className="text-sm text-gray-500">Get notified about new polls</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
                              peer-checked:after:translate-x-full peer-checked:after:border-white 
                              after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                              after:bg-white after:border-gray-300 after:border after:rounded-full 
                              after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3 border-b dark:border-gray-700">
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-gray-500 mr-3" />
                <div>
                  <h3 className="font-medium">Language</h3>
                  <p className="text-sm text-gray-500">Choose your preferred language</p>
                </div>
              </div>
              <select className="p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                <option>English</option>
                <option>French</option>
                <option>German</option>
                <option>Spanish</option>
              </select>
            </div>

            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <Lock className="w-5 h-5 text-gray-500 mr-3" />
                <div>
                  <h3 className="font-medium">Privacy</h3>
                  <p className="text-sm text-gray-500">Manage your privacy settings</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700">
                Configure
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}