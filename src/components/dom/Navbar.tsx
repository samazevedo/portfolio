import { Link } from '@chakra-ui/next-js'
import { Grid } from '@chakra-ui/react'

interface LinkItemProps {
    href: string
    children: React.ReactNode
}
const LinkItem = ({ href, children }: LinkItemProps) => {
    return (
        <Link
            href={href}
            p={2}
            // bg={active? 'glassTeal':undefined}
        >
            {children}
        </Link>
    )
}

export const Navbar = () => {
    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={3}>
            <LinkItem href='/'>Home</LinkItem>
            <LinkItem href='/portfolio'>Portfolio</LinkItem>
            <LinkItem href='/contact'>Contact</LinkItem>
        </Grid>
    )
}
