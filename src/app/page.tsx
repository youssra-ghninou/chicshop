import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Home() {
  return (
    <main
      className={`${inter.variable} flex h-screen items-center justify-center font-sans`}
    >
      <div className='text-3xl font-semibold'>hi</div>
    </main>
  )
}
