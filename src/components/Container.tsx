import type { FC } from 'react'

const Container: FC<ContainerProps> = ({
  id,
  tag: Tag = 'div' as keyof JSX.IntrinsicElements,
  children,
  className
}) => {
  return (
    <Tag id={id} className={`p-8 md:p-12 xl:p-16 ${className}`}>
      {children}
    </Tag>
  )
}

type ContainerProps = {
  id?: string
  tag?: 'div' | 'nav' | 'article' | 'section' | 'header' | 'summary' | 'blockquote'
  children: JSX.Element | JSX.Element[]
  className?: string
}

export default Container
export type { ContainerProps }
