'use client'

import { Globe } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex items-center space-x-4">
      <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      <span className="text-xl font-bold">Direct Democracy</span>
      <select className="appearance-none bg-transparent border-none cursor-pointer text-xl outline-none focus:ring-0 hover:opacity-80">
        <option value="us">🇺🇸</option>
        <option value="fr">🇫🇷</option>
        <option value="de">🇩🇪</option>
        <option value="gb">🇬🇧</option>
        <option value="es">🇪🇸</option>
      </select>
    </div>
  )
} 