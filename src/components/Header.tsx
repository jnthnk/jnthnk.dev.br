import Container from '@/components/Container'
import usePageContext from '@/hooks/usePageContext'
import type { FC } from 'react'

const Header: FC = () => {
  const {
    i18n: { header: i18n }
  } = usePageContext()
  return (
    <header className='fixed overflow-auto z-20 inset-0 right-auto border-2 border-gray-500 rounded-tl-lg rounded-bl-lg md:w-72 xl:w-80'>
      <Container>
        <ul className=''>
          {i18n.items.map(({ abbr, slug, label }) => (
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
