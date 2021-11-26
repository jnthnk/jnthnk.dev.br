import type { FC } from 'react'

const Title: FC<TitleProps> = ({
  tag: Tag = 'h1' as keyof JSX.IntrinsicElements,
  size = 'large',
  children,
  className
}) => (
  <Tag
    className={`block${
      size === 'small'
        ? ' text-xl'
        : size === 'medium'
        ? ' text-2xl md:text-3xl xl:text-4xl'
        : ' text-4xl md:text-5xl xl:text-6xl'
    }${className ? ` ${className}` : ''}`}
  >
    {children}
  </Tag>
)

type TitleProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
  size?: 'small' | 'medium' | 'large'
  children: string | JSX.Element | (string | JSX.Element)[]
  className?: string
}

export default Title
export type { TitleProps }
