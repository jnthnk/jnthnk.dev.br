import Container from '@/components/Container'
import Title from '@/components/Title'
import type { FC } from 'react'

const Welcome: FC<WelcomeProps> = ({}) => {
  return (
    <header className='relative flex items-center justify-center py-8 bg-black text-white sm:min-h-screen bg-gray-900'>
      <Container className='text-center'>
        <Title size='medium' className='mb-6'>
          Jonathan Kim - Front-End Developer
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quae
          illo fugit animi? Pariatur, velit.
        </p>
      </Container>
    </header>
  )
}

type WelcomeProps = {}

export default Welcome
export type { WelcomeProps }
