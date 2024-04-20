import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fast-Food app',
  description: 'online fast-food store',
  icons:{
    icon:"/images/favicon.png"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
