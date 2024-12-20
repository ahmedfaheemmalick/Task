import { ReactNode } from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../theme'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={roboto.variable}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
