import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import NavMenu from './components/navmenu/NavMenu'

export const metadata: Metadata = {
  title: 'NextSpace',
  description: 'Myspace clone with basic functionality made with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavMenu />
        {children}
      </body>
    </html>
  )
}
