'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./providers"

import { store } from "@/store/store"
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Workflo',
//   description: 'Project management made easy',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider store={store}>
          <Providers>{children}</Providers>
        </Provider>
      </body>
    </html>
  )
}
