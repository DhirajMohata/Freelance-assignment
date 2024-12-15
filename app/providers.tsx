'use client'

import { ThemeProvider } from "next-themes"
import { Provider } from 'react-redux';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
        {children}
    </ThemeProvider>
  )
}

