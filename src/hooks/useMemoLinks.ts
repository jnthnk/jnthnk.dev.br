import { useMemo } from 'react'
import usePageContext from '@/hooks/usePageContext'

const useMemoLinks = () => {
  const { i18n } = usePageContext()
  const links = useMemo(
    () => [
      {
        abbr: i18n.bio,
        slug: 'bio',
        label: i18n.biography
      },
      {
        abbr: i18n.experience,
        slug: 'exp',
        label: i18n.experience
      },
      {
        abbr: i18n.projects,
        slug: 'pro',
        label: i18n.projects
      },
      {
        abbr: 'Blog',
        slug: 'blog',
        label: 'Blog'
      }
    ],
    [i18n]
  )
  return links
}

export default useMemoLinks
