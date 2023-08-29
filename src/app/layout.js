import './globals.css'
import { VT323 } from 'next/font/google'

const vt = VT323({subsets: ["latin"], weight: "400"})

export const metadata = {
  title: 'Font-folio!',
  description: 'My name is Nicolás Font, so this is my Font-folio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={vt.className} style={{backgroundColor: "#22162B"}}>{children}</body>
    </html>
  )
}
