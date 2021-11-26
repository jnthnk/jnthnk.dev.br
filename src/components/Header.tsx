import Container from '@/components/Container'
import usePageContext from '@/hooks/usePageContext'
import type { FC } from 'react'

const Header: FC = () => {
  const { i18n } = usePageContext()
  return (
    <header className='absolute overflow-hidden z-20 inset-0 top-auto text-white'>
      <Container tag='nav' className='!py-12'>
        <ul className='flex justify-center -my-2 -mx-8 uppercase tracking-widest leading-4'>
          {i18n.header.items.map(({ abbr, slug, label }) => (
            <li key={slug} className='block py-2 px-8'>
              <a className='block p-1 -m-1' href={`#${slug}`}>
                {abbr || label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  )
}

export default Header
