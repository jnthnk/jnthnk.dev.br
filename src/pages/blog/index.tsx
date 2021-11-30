import Head from 'next/head'
import Layout from '@/components/Layout'
import Welcome from '@/components/Welcome'
import i18ns from '@/constants/i18ns'
import type { FC } from 'react'
import type { GetStaticProps } from 'next'
import type { PageContextProps } from '@/contexts/PageContext'

const BlogPage: FC<PageContextProps> = ({ i18n, lang, name }) => {
  return (
    <Layout i18n={i18n} lang={lang} name={name}>
      <Head>
        <title>{i18n.head.title}</title>
      </Head>
      <Welcome />
    </Layout>
  )
}

const getStaticProps: GetStaticProps = ({ locale: lang }) => {
  return {
    props: {
      i18n: i18ns[lang],
      lang,
      name: 'blog'
    }
  }
}

export default BlogPage
export { getStaticProps }
