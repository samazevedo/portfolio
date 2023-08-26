import { Link, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 1.8rem;
    display: inline-flex;
    align-items: center;
    height: 3rem;
    line-height: 2rem;
    padding: 1rem;
    &:hover img {
        transform: rotate(20deg);
    }
`
export const Logo = () => {
    // const footPrintImg = `/images/footprint${useColorModeValue(
    //     '',
    //     '-dark'
    // )}.png`

    return (
        <LogoBox>
            {/* <Link href='/'> */}
            {/* <Image src={footPrintImg} width={20} height={20} alt='logo' /> */}
            <Text
                as='h1'
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontFamily='Buda'
                fontWeight={400}
                letterSpacing={1}
                ml={1}
            >
                Sam Azevedo
            </Text>
            {/* </Link> */}
        </LogoBox>
    )
}
