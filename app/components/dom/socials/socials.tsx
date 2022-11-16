import github from './../../../assets/icons/social/github.svg'
import linkedin from './../../../assets/icons/social/linkedin.svg'
import twitter from './../../../assets/icons/social/twitter.svg'
import styled from 'styled-components'
import Image from 'next/image'

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
    url: 'https://www.linkedin.com/in/samuel-azevedo-santos-908a5b53/',
    icon: linkedin,
  },
  {
    id: '03',
    name: 'Twitter',
    url: 'https://twitter.com/SamAzevedo4',
    icon: twitter,
  },
]
export const Socials = () => {
  return (
    <SocialStyled>

        {socialItems.map((item) => (
          <li key={item.id}>
            <a href={item.url}>
              <Image src={item.icon} alt={item.name} width={30} height={30} />
            </a>
          </li>
        ))}
    </SocialStyled>
  )
}

const SocialStyled = styled.ul`
	width:100%;
	display:grid;
	grid-template-columns: repeat(3, 1fr);
	justify-items:center;
	& img {
		filter: ${({theme}) => theme.colors.filter};
		transition: all 0.2s ease-in;
		&:hover {
			transform: scale(1.5);
			filter: ${({theme}) => theme.colors.filterReversed};
		}
	}

`