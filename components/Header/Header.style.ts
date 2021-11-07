import styled from 'styled-components'

export const HeaderContainer = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.1rem 1.5rem;
    opacity: 0.2;
    transition: all 0.5s ease-in-out;
    &:hover {
        opacity: 1;
    }
`

export const Logo = styled.h1`
    font-size: 1.6rem;
    font-family: ${(p) => p.theme.fonts.cursive};

    a {
        text-decoration: none;
        color: ${(p) => p.theme.colors.gray};
        transition: all 1s ease;
    }
    a:hover {
        color: ${(p) => p.theme.colors.green};
    }
`
