import NextHead from 'next/head'
import usePageContext from '@/hooks/usePageContext'
import type { FC } from 'react'

const Head: FC = () => {
  const {
    i18n: { head: i18n }
  } = usePageContext()
  return (
    <NextHead>
      <title>{i18n.title}</title>
      <meta name='description' content={i18n.description} />
      <meta name='keywords' content={i18n.keywords} />
    </NextHead>
  )
}

export default Head
