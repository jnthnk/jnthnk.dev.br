import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContext from '@/contexts/PageContext'
import type { FC } from 'react'
import type { PageContextProps } from '@/contexts/PageContext'

const Layout: FC<LayoutProps> = ({ i18n, lang, name, children }) => {
  return (
    <PageContext.Provider value={{ i18n, lang, name }}>
      <Head>
        <style>{`
        @font-face {
          font-family: 'DM Mono';
          font-weight: 300;
          font-display: swap;
          src: local('DM Mono Light'), url('fonts/DMMono-Light.woff2') format('woff2'), url('fonts/DMMono-Light.ttf') format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: 'DM Mono';
          font-weight: 300;
          font-style: italic;
          font-display: swap;
          src: local('DM Mono Light'), local('DM Mono Light Italic'), url('fonts/DMMono-LightItalic.woff2') format('woff2'), url('fonts/DMMono-LightItalic.ttf') format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: 'DM Mono';
          font-weight: 500;
          font-display: swap;
          src: local('DM Mono Medium'), url('fonts/DMMono-Medium.woff2') format('woff2'), url('fonts/DMMono-Medium.ttf') format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        `}</style>
      </Head>
      <Header />
      <main className='relative overflow-hidden z-10'>{children}</main>
      <Footer />
    </PageContext.Provider>
  )
}

type LayoutProps = PageContextProps & {
  children: JSX.Element | JSX.Element[]
}

export default Layout
export type { LayoutProps }
