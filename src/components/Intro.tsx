import Container from '@/components/Container'
import Title from '@/components/Title'
import type { FC } from 'react'

const Intro: FC<IntroProps> = ({ title }) => (
  <Container tag='header'>
    <div>
      <Title>{title}</Title>
    </div>
  </Container>
)

type IntroProps = {
  title: string
}

export default Intro
