import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from './utilities/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neon | Front End Developer',
  description:
    'Min Maung Maung aka Neon is a Frontend Developer and UX/UI enthusiast from Myanmar. Crafting pixel-perfect designs and coding adventures, with a passion for continuous learning and exploration."',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID || ''}
      />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
