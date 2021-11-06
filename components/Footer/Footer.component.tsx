import { Center } from '../Center/Center.style'
import { Container } from './Footer.style'
export const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <Container>
            <Center>
                <a href='#'>Sam Azevedo </a> copyright &copy; {currentYear}
            </Center>
        </Container>
    )
}
