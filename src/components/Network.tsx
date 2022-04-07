import Icon from '@/components/Icon'
import type { FC } from 'react'
import type { IconProps } from '@/components/Icon'

const links: LinkProps[] = [
  {
    name: 'instagram',
    label: 'Instagram',
    href: '#'
  },
  {
    name: 'linkedin',
    label: 'LinkedIn',
    href: '#'
  },
  {
    name: 'medium',
    label: 'Medium',
    href: '#'
  },
  {
    name: 'github',
    label: 'GitHub',
    href: '#'
  }
]

const Network: FC = () => {
  return (
    <div className='fixed inset-0 left-auto z-30 flex w-16 flex-col justify-between overflow-auto'>
      <ul className='relative flex flex-col overflow-hidden'>
        {links.map(({ href, name, label }) => (
          <li key={name} className='block'>
            <a href={href} className='flex items-center p-2'>
              <Icon name={name} className='mr-4 ml-[3px] h-10 w-10 flex-shrink-0' />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

type LinkProps = {
  href: string
  name: IconProps['name']
  label: string
}

export default Network
