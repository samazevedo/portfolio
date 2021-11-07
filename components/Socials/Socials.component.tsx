import { Container, SocialItem } from './Socials.style'
import { useState } from 'react'

const ShowAndHide = () => {
    const [show, setShow] = useState(false)
    const socials = ['Github', 'LinkedIn', 'Twitter', 'Facebook', 'Instagram']
}

const Socials = () => {
    return (
        <Container>
            <SocialItem onTouchMoveCapture={Socials}>+</SocialItem>
        </Container>
    )
}

export default Socials
