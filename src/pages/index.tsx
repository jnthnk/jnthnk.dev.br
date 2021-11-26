import Head from 'next/head'
import Layout from '@/components/Layout'
import Welcome from '@/components/Welcome'
import Experience from '@/components/Experience'
import Portfolio from '@/components/Portfolio'
import Articles from '@/components/Articles'
import Biography from '@/components/Biography'
import getI18nByLang from '@/utils/getI18nByLang'
import type { FC } from 'react'
import type { GetStaticProps } from 'next'
import type { PageContextProps } from '@/contexts/PageContext'

const HomePage: FC<PageContextProps> = ({ i18n, lang, name }) => {
  return (
    <Layout i18n={i18n} lang={lang} name={name}>
      <Head>
        <title>{i18n.head.title}</title>
      </Head>
      <Welcome />
      <Experience />
      <Portfolio />
      <Articles />
      <Biography />
    </Layout>
  )
}

const getStaticProps: GetStaticProps = ({ locale: lang }) => {
  return {
    props: {
      i18n: getI18nByLang(lang),
      lang,
      name: 'home'
    }
  }
}

export default HomePage
export { getStaticProps }
