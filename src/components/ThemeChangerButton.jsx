'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { BsSun } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className='h-fit w-fit'>
      {theme === 'light' ? (
        <button onClick={() => setTheme('dark')} className=''>
          <div value='dark' className=''>
            <IconContext.Provider value={{ className: 'text-4xl' }}>
              <MdDarkMode />
            </IconContext.Provider>
          </div>
        </button>
      ) : (
        <button onClick={() => setTheme('light')} className=''>
          <IconContext.Provider value={{ className: 'text-4xl' }}>
            <BsSun />
          </IconContext.Provider>
        </button>
      )}
    </div>
  )
}

export default ThemeSwitch
