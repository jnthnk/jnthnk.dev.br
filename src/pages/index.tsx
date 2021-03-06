import Layout from '@/components/Layout'
import Welcome from '@/components/Welcome'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import datas from '@/constants/datas'
import i18ns from '@/constants/i18ns'
import type { FC } from 'react'
import type { GetStaticProps } from 'next'
import type { LayoutProps } from '@/components/Layout'
import type { WelcomeProps } from '@/components/Welcome'
import type { ExperienceProps } from '@/components/Experience'
import type { PageContextProps } from '@/contexts/PageContext'

const HomePage: FC<HomePageProps> = ({ head, i18n, lang, name, welcome, experience }) => {
  return (
    <Layout head={head} i18n={i18n} lang={lang} name={name}>
      <Welcome {...welcome} />
      <Experience {...experience} />
      <Projects {...experience} />
    </Layout>
  )
}

const getStaticProps: GetStaticProps = ({ locale: lang }: { locale: PageContextProps['lang'] }) => {
  const data = datas[lang]['home']
  const i18n = i18ns[lang]
  return {
    props: {
      i18n,
      lang,
      name: 'home',
      ...data
    }
  }
}

type HomePageProps = Omit<LayoutProps, 'children'> & {
  welcome: WelcomeProps
  experience: ExperienceProps
}

export default HomePage
export { getStaticProps }
export type { HomePageProps }
