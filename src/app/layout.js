import { Inter } from '@next/font/google'
import Menu from './(components)/menu'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className='flex justify-around'>
          <Menu />
        </div>
        {children}
      </body>
    </html>
  )
}
