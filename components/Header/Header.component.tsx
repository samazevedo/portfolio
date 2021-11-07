import Link from 'next/link'
import { HeaderContainer, Logo } from '../Header/Header.style'
import { Nav } from '../Nav/Nav.component'

export const Header = () => (
    <HeaderContainer>
        <Logo>
            <Link href='/'>
                <a>Sam Azevedo</a>
            </Link>
        </Logo>
        <Nav />
    </HeaderContainer>
)
