'use client'
import styled from '@emotion/styled'

const FootStyled = styled.footer`
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    height: 2rem;
    position: fixed;
    bottom: 0;
`

export const Footer = () => {
    return <FootStyled>&copy; Sam Azevedo. All rights reserved</FootStyled>
}
