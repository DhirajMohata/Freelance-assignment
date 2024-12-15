'use client'

import { div } from "framer-motion/dist/client"
import { ThemeProvider } from "next-themes"

export function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 flex items-center justify-center p-4"> 
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg p-8">
            <ThemeProvider attribute="class" defaultTheme="light">
            {children}
            </ThemeProvider>
        </div>
    </div>
  )
}

