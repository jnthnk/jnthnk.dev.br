import type { FC } from 'react'

const Container: FC<ContainerProps> = ({
  tag: Tag = 'div' as keyof JSX.IntrinsicElements,
  children,
  className
}) => {
  return (
    <Tag
      className={`py-16 px-8 md:w-[750px] md:py-20 md:px-6 md:mx-auto lg:w-[900px] xl:w-[1050px] xl:py-24 xl:px-4 2xl:w-[1200px]${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </Tag>
  )
}

type ContainerProps = {
  tag?: 'div' | 'nav' | 'article' | 'section' | 'summary' | 'blockquote'
  children: JSX.Element | JSX.Element[]
  className?: string
}

export default Container
export type { ContainerProps }
