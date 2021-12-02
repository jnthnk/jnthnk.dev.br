import type { PageLang } from '@/contexts/PageContext'

const i18ns: { [key in PageLang]: i18nProps } = {
  pt: {
    head: {
      title: 'Bem-vindo',
      description: '',
      keywords: ''
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
    welcome: {
      slug: 'bem-vindo',
      title: 'Jonathan Kim - UX Specialist',
      excerpt:
        'Sou um desenvolvedor focado em criar interfaces de usuário elegantes, performáticas e intuitivas usando as mais modernas tecnologías web e mobile.'
    },
    experience: {
      slug: 'experiencia',
      title: 'Experiência'
    },
    portfolio: {
      slug: 'projetos',
      title: 'Projetos e trabalhos concluidos',
      excerpt: ''
    }
  },
  es: {
    head: {
      title: 'Bienvenido',
      description: '',
      keywords: ''
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
    welcome: {
      slug: 'bem-vindo',
      title: 'Jonathan Kim - Desenvolvedor Front-End',
      excerpt:
        'Sou um desenvolvedor focado em criar interfaces de usuário elegantes, performáticas e intuitivas usando as mais modernas tecnologías web e mobile.'
    },
    experience: {
      slug: 'experiencia',
      title: 'Experiencia em linguagens'
    },
    portfolio: {
      slug: 'projetos',
      title: 'Ptojetos e trabalhos concluidos',
      excerpt: ''
    }
  },
  en: {
    head: {
      title: 'Welcome',
      description: '',
      keywords: ''
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
    welcome: {
      slug: 'bem-vindo',
      title: 'Jonathan Kim - UX Especialist',
      excerpt:
        'Sou um desenvolvedor front-end focado em criar interfaces de usuário elegantes, performáticas e intuitivas usando as mais modernas tecnologías web e mobile.'
    },
    experience: {
      slug: 'experience',
      title: 'Experiencia em linguagens'
    },
    portfolio: {
      slug: 'projetos',
      title: 'Ptojetos e trabalhos concluidos',
      excerpt: ''
    }
  }
}

type i18nProps = {
  head: {
    title: string
    description: string
    keywords: string
  }
  header: {
    items: {
      slug: string
      label: string
      abbr?: string
    }[]
  }
  welcome: {
    slug: string
    title: string
    excerpt: string
  }
  experience: {
    slug: string
    title: string
  }
  portfolio: {
    slug: string
    title: string
    excerpt: string
  }
}

export default i18ns
export type { i18nProps }
