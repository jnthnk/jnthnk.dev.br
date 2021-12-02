import { useState, useEffect } from 'react'
import Head from '@/components/Head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Network from '@/components/Network'
import PageContext from '@/contexts/PageContext'
import type { FC } from 'react'
import type { PageContextProps } from '@/contexts/PageContext'

const Layout: FC<LayoutProps> = ({ i18n, lang, name, children }) => {
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
      <Head />
      <Header />
      <main
        className={`relative overflow-hidden z-10 md:pl-[18rem] xl:pl-[20rem] pr-[calc(4rem-2px)]`}
      >
        {children}
      </main>
      <Footer />
      <Network />
      <span className='hidden fixed z-20 inset-0 pointer-events-none border-2 border-gray-500 rounded-lg md:block' />
    </PageContext.Provider>
  )
}

type LayoutProps = PageContextProps & {
  children: JSX.Element | JSX.Element[]
}

export default Layout
export type { LayoutProps }
