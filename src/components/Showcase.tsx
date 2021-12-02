import Container from '@/components/Container'
import Title from '@/components/Title'
import usePageContext from '@/hooks/usePageContext'
import type { FC } from 'react'

const Showcase: FC = () => {
  const { i18n } = usePageContext()
  return (
    <Container tag='section' className='md:min-h-screen'>
      <div className='mr-[50%]'>
        <Title tag='h2'>{i18n.experience.title}</Title>
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores perferendis illo quas
          reiciendis, aperiam culpa?
        </p>
      </div>
    </Container>
  )
}

export default Showcase
