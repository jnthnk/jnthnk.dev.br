import Title from '@/components/Title'
import usePageContext from '@/hooks/usePageContext'

const Experience = () => {
  const {
    i18n: { experience: i18n }
  } = usePageContext()
  return (
    <section id={i18n.slug} className='p-12 md:p-14 xl:p-16 border-b'>
      <Title hasColon tag='h2' className='mb-8'>
        {i18n.title}
      </Title>
      <p className='text-xl'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ea ex in ab ipsam, placeat
        dolorem vitae nemo rem ipsa.
      </p>
    </section>
  )
}

export default Experience
