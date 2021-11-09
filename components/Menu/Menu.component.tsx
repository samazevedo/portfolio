// Menu.js
import Link from 'next/link'
import { StyledMenu } from './Menu.style'
import { bool } from 'prop-types'

interface MenuProps {
    isOpen: boolean
}

export const Menu: React.FC<MenuProps> = ({ isOpen }) => {
    return (
        <StyledMenu isOpen={isOpen}>
            <Link href='#home'>
                <a>Home</a>
            </Link>
            <Link href='#about'>
                <a>About</a>
            </Link>
            <Link href='#portfolio'>
                <a>Portfolio</a>
            </Link>
            <Link href='#contact'>
                <a>Contact</a>
            </Link>
        </StyledMenu>
    )
}
Menu.propTypes = {
    isOpen: bool.isRequired,
}
