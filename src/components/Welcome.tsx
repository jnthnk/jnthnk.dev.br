import Container from '@/components/Container'
import Title from '@/components/Title'
import usePageContext from '@/hooks/usePageContext'
import type { FC } from 'react'

const Welcome: FC = () => {
  const {
    i18n: { welcome: i18n }
  } = usePageContext()
  return (
    <header
      id={i18n.slug}
      className='relative flex items-center py-4 border-b-2 border-gray-500 md:min-h-screen md:py-0'
    >
      <Container>
        <Title size='medium' className='mb-6'>
          {i18n.title}
        </Title>
        <p className='text-lg'>{i18n.excerpt}</p>
      </Container>
    </header>
  )
}

export default Welcome
