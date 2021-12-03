import Container from '@/components/Container'
import Title from '@/components/Title'
import usePageContext from '@/hooks/usePageContext'

const Portfolio = () => {
  const {
    i18n: { portfolio: i18n }
  } = usePageContext()
  return (
    <Container id={i18n.slug} tag='section'>
      <Title tag='h2' hasColon>
        {i18n.title}
      </Title>
      <p>{i18n.excerpt}</p>
    </Container>
  )
}

export default Portfolio
