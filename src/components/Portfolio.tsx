import Container from '@/components/Container'
import Title from '@/components/Title'
import usePageContext from '@/hooks/usePageContext'

const Portfolio = () => {
  const { i18n } = usePageContext()
  return (
    <section id={i18n.portfolio.slug}>
      <Container>
        <Title>{i18n.portfolio.title}</Title>
      </Container>
    </section>
  )
}

export default Portfolio
