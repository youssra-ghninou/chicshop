import Providers from '@/components/Providers'
import MobileTopMenu from '@/components/TopMenu'
import { Inter } from '@next/font/google'
import { ServerThemeProvider } from 'next-themes'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    // the use of </ServerThemeProvider> resolve the hydration error
    <ServerThemeProvider attribute='class'>
      <html lang='en' className={`${inter.variable}`}>
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>
          <MobileTopMenu />
          <Providers>{children}</Providers>
        </body>
      </html>
    </ServerThemeProvider>
  )
}
