import github from '../../assets/icons/social/github.svg'
import linkedin from '../../assets/icons/social/linkedin.svg'
import twitter from '../../assets/icons/social/twitter.svg'

import Image from 'next/image'
interface SocialsProps {
  children?: React.ReactNode
}

const socialItems = [
  {
    id: '01',
    name: 'Github',
    url: 'https://github.com/samazevedo',
    icon: github,
  },
  {
    id: '02',
    name: 'LinkedIn',
    url: 'https://github.com/samazevedo',
    icon: linkedin,
  },
  {
    id: '03',
    name: 'Twitter',
    url: 'https://twitter.com/SamAzevedo4',
    icon: twitter,
  },
]
export const Socials = ({ children }: SocialsProps) => {
  return (
    <>
      <ul className='socials'>
        {socialItems.map((item) => (
          <li key={item.id}>
            <a href={item.url}>
              <Image src={item.icon} alt={item.name} width={30} height={30} />
            </a>
          </li>
        ))}
      </ul>
      {children}
    </>
  )
}
