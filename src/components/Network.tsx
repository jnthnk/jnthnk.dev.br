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
    <div className='fixed overflow-auto inset-0 left-auto z-30 flex flex-col justify-between w-16 border-2 border-gray-500'>
      <div className=''>
        <Icon name='world' className='w-10 h-10 flex-shrink-0 mr-4 ml-[3px]' />
      </div>
      <ul className='relative overflow-hidden flex flex-col'>
        {links.map(({ href, name, label }) => (
          <li key={name} className='block'>
            <a href={href} className='flex items-center p-2'>
              <Icon name={name} className='w-10 h-10 flex-shrink-0 mr-4 ml-[3px]' />
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
