import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavbarHeader from '../components/Layout';
import { Providers } from "./providers";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Meeyana',
  description: 'Local Brand Vietnam',
  viewport: 'initial-scale=1, width=device-width',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>
          <NavbarHeader />
          {children}
        </Providers>
      </body>
    </html>
  )
}
