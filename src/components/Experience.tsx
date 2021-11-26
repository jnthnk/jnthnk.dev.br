import Container from '@/components/Container'
import Title from '@/components/Title'
import usePageContext from '@/hooks/usePageContext'

const Experience = () => {
  const { i18n } = usePageContext()
  return (
    <section id={i18n.experience.slug}>
      <Container>
        <Title tag='h2'>{i18n.experience.title}</Title>
      </Container>
    </section>
  )
}

export default Experience
