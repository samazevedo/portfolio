import { Container, SocialItem } from './Socials.style'

const Socials = () => {
    const socialItems = [
        {
            name: 'Github',
            id: 1,
            link: 'https://github.com/samazevedo',
            icon: './icons/github.svg',
        },
        {
            name: 'Linkedin',
            id: 2,
            link: 'https://www.linkedin.com/in/samuel-azevedo-santos-908a5b53/',
            icon: './icons/linkedin.svg',
        },

        {
            name: 'Twitter',
            id: 3,
            link: 'https://twitter.com/SamAzevedo4',
            icon: './icons/twitter.svg',
        },

        {
            name: 'Instagram',
            id: 4,
            link: 'https://www.instagram.com/sam_azevedooo/',
            icon: './icons/instagram.svg',
        },
    ]

    return (
        <div>
            <Container>
                {socialItems.map((item) => (
                    <SocialItem key={item.id}>
                        <a href={item.link}>
                            <img src={item.icon} alt={item.name} />
                        </a>
                    </SocialItem>
                ))}
            </Container>
        </div>
    )
}

export default Socials
