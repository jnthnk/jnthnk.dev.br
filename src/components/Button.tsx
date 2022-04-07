import Link from 'next/link'
import type { FC } from 'react'

const Button: FC<ButtonProps> = ({ href, children, className }) => {
  return href ? (
    <Link passHref href={href}>
      <a className={`inline-flex${className ? ` ${className}` : ''}`}>{children}</a>
    </Link>
  ) : (
    <button type='button' className={`inline-flex${className ? ` ${className}` : ''}`}>
      {children}
    </button>
  )
}

type ButtonProps = {
  href?: string
  children: string | JSX.Element | (string | JSX.Element)[]
  className?: string
}

export default Button
