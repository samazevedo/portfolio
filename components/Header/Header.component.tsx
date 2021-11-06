import Link from 'next/link'
import { Center } from '../Center/Center.style'
import { Container, Logo } from '../Header/Header.style'

export const Header = () => (
    <Container>
        <Center>
            <Logo>
                <Link href='/'>
                    <a>Sam</a>
                </Link>
            </Logo>
        </Center>
    </Container>
)
