import type { PageContextProps } from '@/contexts/PageContext'

const i18ns: { [key in PageContextProps['lang']]: i18nProps } = {
  en: {
    bio: 'Bio',
    projects: 'Projects',
    biography: 'Biography',
    experience: 'Experience'
  },
  es: { bio: 'Bio', biography: 'Biografía', projects: 'Proyectos', experience: 'Experiencia' },
  pt: { bio: 'Bio', biography: 'Biography', projects: 'Projects', experience: 'Experience' }
}

type i18nProps = {
  bio: string
  projects: string
  biography: string
  experience: string
}

export default i18ns
export type { i18nProps }
