import Title from '@/components/Title'
import usePageContext from '@/hooks/usePageContext'
import type { FC } from 'react'

const Experience: FC<ExperienceProps> = ({ slug, title }) => {
  const {} = usePageContext()
  return (
    <section id={slug} className='border-b p-12 md:p-14 xl:p-16'>
      <Title hasColon tag='h2' className='mb-8'>
        {title}
      </Title>
      <p className='text-xl'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ea ex in ab ipsam, placeat
        dolorem vitae nemo rem ipsa.
      </p>
    </section>
  )
}

type ExperienceProps = {
  slug: string
  title: string
  children?: undefined
}

export default Experience
