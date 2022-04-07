import type { FC } from 'react'

const Title: FC<TitleProps> = ({
  tag: Tag = 'h1' as keyof JSX.IntrinsicElements,
  size = 'medium',
  children,
  hasColon,
  className
}) => (
  <Tag
    className={`block font-medium text-white tracking-wider${
      size === 'small'
        ? ' text-xl'
        : size === 'medium'
        ? ' text-2xl md:text-3xl xl:text-4xl'
        : ' text-4xl md:text-5xl xl:text-6xl'
    }${className ? ` ${className}` : ''}${hasColon ? " after:content-[':']" : ''}`}
  >
    {children}
  </Tag>
)

type TitleProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
  size?: 'small' | 'medium' | 'large'
  children: string | JSX.Element | (string | JSX.Element)[]
  hasColon?: true
  className?: string
}

export default Title
export type { TitleProps }
