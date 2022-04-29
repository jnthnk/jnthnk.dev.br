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
        slug: 'bem-vindo',
        titles: ['Jonathan Kim', 'Full-React Developer'],
        description: `I'm a programmer that develop fluid user-interfaces for web, mobile and desktop using the best on react ecosystem.`
      },
      experience: {
        slug: 'experience',
        title: 'Experience',
        descriptions: [`I'm in love with chocolate`]
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
      welcome: null,
      experience: null
    }
  },
  pt: {
    home: {
      head: {
        title: '',
        description: '',
        keywords: ''
      },
      welcome: null,
      experience: null
    }
  }
}

type dataProps = {
  home: Omit<HomePageProps, 'i18n' | 'lang' | 'name'>
}

export default datas
