import type { PageLang } from '@/contexts/PageContext'

const getI18nByLang = (lang: string) => {
  const i18ns: { [key in PageLang]: i18nProps } = {
    pt: {
      head: {
        title: 'Bem-vindo'
      },
      header: {
        items: [
          {
            slug: 'experiencia',
            label: 'Experiência',
            abbr: 'Exp'
          },
          {
            slug: 'projetos',
            label: 'Projetos',
            abbr: 'Pro'
          },
          {
            slug: 'blog',
            label: 'Blog'
          },
          {
            slug: 'biografia',
            label: 'Biografia',
            abbr: 'Bio'
          }
        ]
      },
      experience: {
        slug: 'experiencia',
        title: 'Experiencia em linguagens'
      }
    },
    es: {
      head: {
        title: 'Bienvenido'
      },
      header: {
        items: [
          {
            slug: 'experiencia',
            label: 'Experiencia',
            abbr: 'Exp'
          },
          {
            slug: 'projectos',
            label: 'Projectos',
            abbr: 'Pro'
          },
          {
            slug: 'blog',
            label: 'Blog'
          },
          {
            slug: 'biografia',
            label: 'Biografía',
            abbr: 'Bio'
          }
        ]
      },
      experience: {
        slug: 'experiencia',
        title: 'Experiencia em linguagens'
      }
    },
    en: {
      head: {
        title: 'Welcome'
      },
      header: {
        items: [
          {
            slug: 'experience',
            label: 'Experience',
            abbr: 'Exp'
          },
          {
            slug: 'projects',
            label: 'Projects',
            abbr: 'Pro'
          },
          {
            slug: 'blog',
            label: 'Blog'
          },
          {
            slug: 'biography',
            label: 'Biography',
            abbr: 'Bio'
          }
        ]
      },
      experience: {
        slug: 'experience',
        title: 'Experiencia em linguagens'
      }
    }
  }
  return i18ns[lang]
}

type i18nProps = {
  head: {
    title: string
  }
  header: {
    items: { slug: string; label: string; abbr?: string }[]
  }
  experience: {
    slug: string
    title: string
  }
}

export default getI18nByLang
export type { i18nProps }
