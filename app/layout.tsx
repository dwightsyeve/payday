import type { Metadata } from 'next'
import { Outfit, Figtree } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PayDay | Fast Loan Matching',
  description:
    'Get matched with trusted lenders fast. Secure online application for personal loans and short-term funding.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${figtree.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
