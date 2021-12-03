import Container from '@/components/Container'
import usePageContext from '@/hooks/usePageContext'
import type { FC } from 'react'

const Header: FC = () => {
  const {
    i18n: { header: i18n }
  } = usePageContext()
  return (
    <header className='flex flex-col justify-center fixed overflow-auto z-20 inset-0 right-auto ha border-2 border-gray-500 md:w-72 xl:w-80'>
      <Container className='w-full'>
        <ul className='flex flex-col -m-2'>
          {i18n.items.map(({ abbr, slug, label }) => (
            <li key={slug} className='block p-2'>
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
