import { useState, useEffect } from 'react'
import Head from '@/components/Head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContext from '@/contexts/PageContext'
import type { FC } from 'react'
import type { HeadProps } from '@/components/Head'
import type { PageContextProps } from '@/contexts/PageContext'

const Layout: FC<LayoutProps> = ({ head, i18n, lang, name, children }) => {
  const [scroll, scrollUpdate] = useState(false)
  useEffect(() => {
    const windowOnScroll = () => {
      const { scrollY } = window
      scrollUpdate(scrollY ? true : false)
    }
    window.addEventListener('scroll', windowOnScroll)
    return () => {
      window.removeEventListener('scroll', windowOnScroll)
    }
  }, [])
  return (
    <PageContext.Provider value={{ i18n, lang, name }}>
      <Head {...head} />
      <Header />
      <main className={`relative z-10 overflow-hidden pt-24 md:pt-0 md:pl-56 xl:pl-64`}>
        {children}
      </main>
      <Footer />
      <span className='pointer-events-none fixed inset-0 block border-2 border-gray-500' />
    </PageContext.Provider>
  )
}

type LayoutProps = PageContextProps & {
  head: HeadProps
  children: JSX.Element | JSX.Element[]
}

export default Layout
export type { LayoutProps }
