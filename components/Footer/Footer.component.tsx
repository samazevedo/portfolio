import Socials from '../Socials/Socials.component'
import { Container } from './Footer.style'

export const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <Container>
            <p>
                &copy; copyright <a href='#home'> Sam Azevedo </a> |{' '}
                {currentYear} | All rights reserved
            </p>

            <div>
                <Socials />
            </div>
        </Container>
    )
}
