import Title from '@/components/Title'
import Icon from '@/components/Icon'
import Container from '@/components/Container'
import usePageContext from '@/hooks/usePageContext'
import type { FC } from 'react'

const techs = ['JavaScript / TypeScript', 'HTML / Pug', 'CSS / Sass', 'React']

const Projects: FC<ProjectsProps> = ({ slug, title, descriptions }) => {
  return (
    <section
      id={slug}
      className='border-b-2 border-gray-500 md:py-0 md:pl-2 md:pr-16 lg:pl-4 xl:pl-8'
    >
      <Container>
        <Title hasColon tag='h2' className='mb-8 md:-ml-2 lg:-ml-4 xl:-ml-8'>
          {title}
        </Title>
        <p className='text-xl'>{descriptions[0]}</p>
      </Container>
    </section>
  )
}

type ProjectsProps = {
  slug: string
  title: string
  descriptions: string[]
  children?: undefined
}

export default Projects
export type { ProjectsProps }
