import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cabinet Harir',
  description: 'Page d’attente Cabinet Harir',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
