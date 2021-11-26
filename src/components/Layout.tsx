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
          font-family: 'MyWebFont';
          src:
            local('DMMono'),
            url('/fonts/DMMonoLight.woff2') format('woff2'),
            url('/fonts/DMMonoLight.ttf') format('truetype');
        }`}</style>
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
