import Link from 'next/link'
import { Container, NavItem, NavList } from './Nav.style'
export const Nav = () => {
    return (
        <Container>
            <NavList>
                <NavItem>
                    <Link href='#home'>
                        <a>Home</a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href='#about'>
                        <a>About</a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href='#projects'>
                        <a>Projects</a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href='#contact'>
                        <a>Contact</a>
                    </Link>
                </NavItem>
            </NavList>
        </Container>
    )
}
