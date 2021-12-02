import Container from '@/components/Container'
import Title from '@/components/Title'
import usePageContext from '@/hooks/usePageContext'

const Portfolio = () => {
  const {
    i18n: { portfolio: i18n }
  } = usePageContext()
  return (
    <section id={i18n.slug}>
      <Container>
        <Title>{i18n.title}</Title>
        <p>{i18n.excerpt}</p>
      </Container>
    </section>
  )
}

export default Portfolio
