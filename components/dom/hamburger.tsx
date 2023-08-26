import {
    MenuButton,
    Menu,
    IconButton,
    MenuList,
    MenuItem,
    useColorModeValue,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function HamburgerMenu() {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='ghost'
                bg={useColorModeValue('primary.light', 'primary.dark')}
            />
            <MenuList bg={useColorModeValue('primary.light', 'primary.dark')}>
                <MenuItem
                    bg={useColorModeValue('primary.light', 'primary.dark')}
                >
                    <Link href='/'>About</Link>
                </MenuItem>
                <MenuItem
                    bg={useColorModeValue('primary.light', 'primary.dark')}
                >
                    <Link href='/portfolio'>Portfolio</Link>
                </MenuItem>
                <MenuItem
                    bg={useColorModeValue('primary.light', 'primary.dark')}
                >
                    <Link href='/contact'>Contact</Link>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
