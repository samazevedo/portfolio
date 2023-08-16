import {
    MenuButton,
    Menu,
    IconButton,
    MenuList,
    MenuItem,
    Link,
    useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function HamburgerMenu() {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='ghost'
            />
            <MenuList bg={useColorModeValue('primary.light', 'primary.dark')}>
                <MenuItem>
                    <Link href='/'>About</Link>
                </MenuItem>
                <MenuItem>
                    <Link href='/portfolio'>Portfolio</Link>
                </MenuItem>
                <MenuItem>
                    <Link href='/contact'>Contact</Link>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
