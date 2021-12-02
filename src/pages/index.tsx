import Layout from '@/components/Layout'
import Welcome from '@/components/Welcome'
import Experience from '@/components/Experience'
import i18ns from '@/constants/i18ns'
import type { FC } from 'react'
import type { GetStaticProps } from 'next'
import type { PageContextProps } from '@/contexts/PageContext'

const HomePage: FC<PageContextProps> = ({ i18n, lang, name }) => {
  return (
    <Layout i18n={i18n} lang={lang} name={name}>
      <Welcome />
      <Experience />
    </Layout>
  )
}

const getStaticProps: GetStaticProps = ({ locale: lang }) => {
  return {
    props: {
      i18n: i18ns[lang],
      lang,
      name: 'home'
    }
  }
}

export default HomePage
export { getStaticProps }
