'use client'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

const ThemeSwitch = () => {
  const [isDarkMode, setDarkMode] = useState(false)

  const { theme, setTheme } = useTheme()

  const toggleDarkMode = (checked) => {
    setDarkMode(checked)
  }

  return (
    <>
      <div>
        The current theme is: {theme}
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
      <DarkModeSwitch
        style={{ marginBottom: '2rem' }}
        checked={isDarkMode}
        onClick={() => setTheme('light')}
        size={120}
      />
    </>
  )
}

export default ThemeSwitch
