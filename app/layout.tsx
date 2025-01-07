import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from './utilities/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neon | Front End Developer',
  metadataBase: new URL('https://voyager-neon.netlify.app/'),
  description:
    'Min Maung Maung aka Neon is a Frontend Developer and UX/UI enthusiast from Myanmar. Crafting pixel-perfect designs and coding adventures, with a passion for continuous learning and exploration.',
  openGraph: {
    url: 'https://voyager-neon.netlify.app/',
    images: '/opengraph-image.jpg',
    title: 'Neon | Front End Developer',
    locale: 'en_US',
    type: 'website',
    description:
      'Min Maung Maung aka Neon is a Frontend Developer and UX/UI enthusiast from Myanmar. Crafting pixel-perfect designs and coding adventures, with a passion for continuous learning and exploration.',
  },
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
