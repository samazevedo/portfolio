import { Container, SocialItem } from './Socials.style'
import Github from './icons/github.svg'
import { useState } from 'react'

const ShowAndHide = () => {
    const [show, setShow] = useState(false)
}

const Socials = () => {
    const [show, setShow] = useState(false)
    const Socials = {
        github: {
            id: 1,
            link: 'https://github.com/samazevedo',
            icon: './icons/github.svg',
        },
        linkedin: {
            id: 2,
            link: 'https://www.linkedin.com/in/samazevedo/',
            icon: './icons/linkedin.svg',
        },
    }

    return (
        <div>
            <Container>
                <SocialItem>Git</SocialItem>
                <SocialItem>s</SocialItem>
                <SocialItem>t</SocialItem>
                <SocialItem>t</SocialItem>
            </Container>
        </div>
    )
}

export default Socials
