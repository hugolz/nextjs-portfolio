import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextScript, Head } from 'next/document'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script defer src="/script/worms.js" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
