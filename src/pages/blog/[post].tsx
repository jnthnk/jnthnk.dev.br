import Head from 'next/head'
import Layout from '@/components/Layout'
import Welcome from '@/components/Welcome'
import getI18nByLang from '@/utils/getI18nByLang'
import type { FC } from 'react'
import type { GetStaticProps } from 'next'
import type { PageContextProps } from '@/contexts/PageContext'

const PostPage: FC<PageContextProps> = ({ lang, name, i18n }) => {
  return (
    <Layout lang={lang} name={name} i18n={i18n}>
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
      i18n: getI18nByLang(lang),
      lang,
      name: 'home'
    }
  }
}

export default PostPage
export { getStaticProps }
