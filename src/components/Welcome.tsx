import Button from '@/components/Button'
import Container from '@/components/Container'
import Title from '@/components/Title'
import type { FC } from 'react'

const Welcome: FC<WelcomeProps> = ({ slug, titles, description }) => {
  return (
    <header
      id={slug}
      className='relative flex items-center border-b-2 border-gray-500 py-4 md:min-h-screen md:py-0 md:pl-4 xl:pr-16 xl:pl-8'
    >
      <Container className='w-full'>
        <Title size='large' className='mb-4 md:mb-8 md:-ml-4 xl:-ml-8'>
          {titles[0]}
          <span className='mt-2 block md:mt-4 md:ml-2 xl:ml-4'>{titles[1]}</span>
        </Title>
        <p className='text-lg'>{description}</p>
        <Button href='/hello'>More about me</Button>
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
