import type { FC } from 'react'

const Container: FC<ContainerProps> = ({
  id,
  tag: Tag = 'div' as keyof JSX.IntrinsicElements,
  children,
  className
}) => {
  return (
    <Tag id={id} className={`p-12 md:p-14 xl:p-16${className ? ` ${className}` : ''}`}>
      {children}
    </Tag>
  )
}

type ContainerProps = {
  id?: string
  tag?: 'div' | 'nav' | 'article' | 'section' | 'summary' | 'blockquote'
  children: JSX.Element | JSX.Element[]
  className?: string
}

export default Container
export type { ContainerProps }
