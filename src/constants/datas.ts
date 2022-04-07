import { PageContextProps } from '@/contexts/PageContext'
import { HomePageProps } from '@/pages/index'

const datas: { [key in PageContextProps['lang']]: dataProps } = {
  en: {
    home: {
      head: {
        title: '',
        description: '',
        keywords: ''
      },
      welcome: {
        slug: '',
        titles: ['Jonathan Kim', 'Full-Stack Developer'],
        description: `I'm a programmer that develop fluid user-interfaces for web, mobile and desktop using the best on react ecosystem.`
      }
    }
  },
  es: {
    home: {
      head: {
        title: '',
        description: '',
        keywords: ''
      },
      welcome: null
    }
  },
  pt: {
    home: {
      head: {
        title: '',
        description: '',
        keywords: ''
      },
      welcome: null
    }
  }
}

type dataProps = {
  home: Omit<HomePageProps, 'i18n' | 'lang' | 'name'>
}

export default datas
