import { useMemo } from 'react'
import Container from '@/components/Container'
import usePageContext from '@/hooks/usePageContext'
import type { FC } from 'react'

const Header: FC<HeaderProps> = () => {
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
      }
    ],
    [i18n]
  )
  return (
    <header className='fixed inset-0 bottom-auto z-20 flex justify-center overflow-auto border-2 border-gray-500 uppercase md:right-auto md:bottom-0 md:w-64 md:flex-col xl:w-72'>
      <Container className='w-full px-8 py-6'>
        <ul className='flex items-end gap-8 font-bold leading-4 tracking-wider md:flex-col'>
          {links.map(({ abbr, slug, label }) => (
            <li key={slug} className='block'>
              <a className='-m-1 block p-1' href={`#${slug}`}>
                {abbr || label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  )
}

type HeaderProps = {
  children?: undefined
}

export default Header
export type { HeaderProps }
