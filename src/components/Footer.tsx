import Link from 'next/link'
import Container from '@/components/Container'
import usePageContext from '@/hooks/usePageContext'
import useMemoLinks from '@/hooks/useMemoLinks'
import type { FC } from 'react'

const Footer: FC = () => {
  const { i18n } = usePageContext()
  const links = useMemoLinks()
  return (
    <footer className='md:hidden'>
      <Container>
        <p className='mb-4'>Copyright jnthnk.dev 2020-2022</p>
        <ul className='flex flex-wrap gap-5 leading-4'>
          {links.map(({ slug, label }) => (
            <li className='block'>
              <Link passHref href={slug}>
                <a className='-m-1 block p-1'>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  )
}

export default Footer
