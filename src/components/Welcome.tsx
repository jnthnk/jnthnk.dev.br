import Container from '@/components/Container'
import Title from '@/components/Title'
import type { FC } from 'react'

const Welcome: FC<WelcomeProps> = ({ slug, titles, description }) => {
  return (
    <header
      id={slug}
      className='relative flex items-center border-b-2 border-gray-500 py-4 md:min-h-screen md:py-0 md:pl-8'
    >
      <Container>
        <Title size='large' className='mb-8'>
          {titles[0]}
          <span className='mt-2 block'>{titles[1]}</span>
        </Title>
        <p className='text-lg'>{description}</p>
      </Container>
    </header>
  )
}

type WelcomeProps = {
  slug: string
  titles: [string, string]
  children?: undefined
  description: string
}

export default Welcome
export type { WelcomeProps }
