import Link from 'next/link'
import { HeaderContainer, Logo } from '../Header/Header.style'
import { Nav } from '../Nav/Nav.component'
import { useState } from 'react'
import { Burger } from '../Burger/Burger.component'
import { Menu } from '../Menu/Menu.component'

export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <HeaderContainer>
            <Logo>
                <Link href='/'>
                    <a>Sam Azevedo</a>
                </Link>
            </Logo>
            <div>
                <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
                <Menu isOpen={isOpen} />
                <Nav />
            </div>
        </HeaderContainer>
    )
}
