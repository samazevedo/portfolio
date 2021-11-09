import { Container } from './Footer.style'
export const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <Container>
            &copy; copyright <a href='#'>Sam Azevedo </a> | {currentYear} | All
            rights reserved
            <div>
                <ul>
                    <li>
                        <a href='#'>G</a>
                    </li>
                    <li>
                        <a href='#'>L</a>
                    </li>
                    <li>
                        <a href='#'>T</a>
                    </li>
                    <li>
                        <a href='#'>I</a>
                    </li>
                </ul>
            </div>
        </Container>
    )
}
