import Icon from '@/components/Icon'
import Container from '@/components/Container'
import usePageContext from '@/hooks/usePageContext'
import useMemoLinks from '@/hooks/useMemoLinks'
import type { FC } from 'react'
import type { IconProps } from '@/components/Icon'

const networks: networkProps[] = [
  {
    name: 'instagram',
    label: 'Instagram',
    href: '#'
  },
  {
    name: 'linkedin',
    label: 'LinkedIn',
    href: '#'
  },
  {
    name: 'medium',
    label: 'Medium',
    href: '#'
  },
  {
    name: 'github',
    label: 'GitHub',
    href: 'https://github.com/jnthnk'
  }
]

const Header: FC<HeaderProps> = () => {
  const { i18n } = usePageContext()
  const links = useMemoLinks()
  return (
    <header className='fixed inset-0 bottom-auto z-20 flex justify-center overflow-auto border-2 border-gray-500 bg-gray-900 uppercase md:right-auto md:bottom-0 md:w-56 md:flex-col xl:w-64'>
      <Container className='flex w-full items-center px-8 py-6 md:block'>
        <div className='-my-2 h-16 w-16 flex-shrink-0 rounded-full bg-white md:mb-10 md:h-28 md:w-28 xl:mb-12 xl:h-32 xl:w-32' />
        <ul className='hidden items-start gap-8 font-bold leading-4 tracking-widest md:flex md:flex-col'>
          {links.map(({ abbr, slug, label }) => (
            <li key={slug} className='block'>
              <a className='-m-1 block p-1' href={`#${slug}`}>
                {abbr || label}
              </a>
            </li>
          ))}
        </ul>
        <div className='ml-auto md:mt-10 md:-ml-1 xl:fixed xl:inset-0 xl:left-auto xl:ml-0 xl:mt-0 xl:p-4'>
          <ul className='relative z-10 flex items-center gap-3 xl:h-full xl:flex-col xl:justify-center xl:gap-4'>
            {networks.map(({ href, name, label }) => (
              <li key={name} className='block'>
                <a
                  href={href}
                  className='relative block h-8 w-8 overflow-hidden md:h-6 md:w-6 xl:h-8 xl:w-8'
                >
                  <Icon name={name} className='h-full w-full fill-white' />
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <span className='absolute inset-0 z-0 hidden bg-primary-900 xl:block' />
        </div>
      </Container>
    </header>
  )
}

type HeaderProps = {
  children?: undefined
}

type networkProps = {
  href: string
  name: IconProps['name']
  label: string
}

export default Header
export type { HeaderProps }
