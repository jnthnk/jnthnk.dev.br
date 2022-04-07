import NextHead from 'next/head'
import usePageContext from '@/hooks/usePageContext'
import type { FC } from 'react'

const Head: FC<HeadProps> = ({ title, keywords, description }) => {
  const { name } = usePageContext()
  return (
    <NextHead>
      <title>{name === 'home' ? title : `${name} | Jonathan Kim - Front-End Dev`}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </NextHead>
  )
}

type HeadProps = {
  title: string
  children?: undefined
  keywords: string
  description: string
}

export default Head
export type { HeadProps }
