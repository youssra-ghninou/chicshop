'use client'
import { ThemeProvider } from 'next-themes'

// * Because layout.tsx is only rendered on the server-side, we can use the
// * ThemeProvider and OtherProvider components directly in the RootLayout
// * component.

// * This is not possible in the app.tsx file because it is rendered
// * on both the server-side and the client-side.

export default function Providers({ children }) {
  return (
    <ThemeProvider storageKey='preferred-theme' attribute='class'>
      {children}
    </ThemeProvider>
  )
}
