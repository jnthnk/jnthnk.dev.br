import type { FC } from 'react'
import type { AppProps } from 'next/app'
import '@/styles/tailwind.css'
import '@/styles/fonts.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
