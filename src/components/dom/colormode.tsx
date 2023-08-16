'use client'
import { AnimatePresence, motion } from 'framer-motion'
import {
    useColorMode,
    useColorModeValue,
    IconButton,
    IconButtonProps,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
    const { toggleColorMode } = useColorMode()
    const text = useColorModeValue('dark', 'light')
    const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)

    return (
        <AnimatePresence initial={true}>
            <motion.div
                style={{ display: 'inline-block' }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0.2 }}
                transition={{ duration: 0.7 }}
                key='theme-btn-toggle'
            >
                <IconButton
                    size='md'
                    fontSize='lg'
                    variant='ghost'
                    color='current'
                    marginLeft='2'
                    onClick={toggleColorMode}
                    icon={<SwitchIcon />}
                    aria-label={`Switch to ${text} mode`}
                    {...props}
                />
            </motion.div>
        </AnimatePresence>
    )
}
