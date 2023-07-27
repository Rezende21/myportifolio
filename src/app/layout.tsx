import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], weight:['300', '400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Gabriel Rezende',
  description: 'Gabriel Rezende dev moble',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
