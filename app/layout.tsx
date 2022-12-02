"use client";

import './globals.css'
import Header from '@/components/header'
import { SessionProvider } from 'next-auth/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <head />
        <body>
          <Header />
          {children}        
        </body>
      </html>
    </SessionProvider>
  )
}
