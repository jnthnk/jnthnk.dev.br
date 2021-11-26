import { createContext } from 'react'
import type { i18nProps } from '@/utils/getI18nByLang'

const PageContext = createContext<PageContextProps>(null)

type PageLang = 'pt' | 'es' | 'en'

type PageContextProps = {
  i18n: i18nProps
  lang: PageLang
  name: 'home' | 'blog' | 'post'
}

export default PageContext
export type { PageLang, PageContextProps }
