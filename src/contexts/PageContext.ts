import { createContext } from 'react'
import { i18nProps } from '@/constants/i18ns'

const PageContext = createContext<PageContextProps>(null)

type PageContextProps = {
  lang: 'pt' | 'es' | 'en'
  name: 'home' | 'blog' | 'post'
  i18n: i18nProps
}

export default PageContext
export type { PageContextProps }
