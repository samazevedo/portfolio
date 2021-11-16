import styled from 'styled-components'

export const HeaderContainer = styled.header`
    position: fixed;
    display: flex;
    max-height: 10rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.1rem 1.5rem;
    opacity: 0.9;
    transition: all 0.5s ease-in-out;
    &:hover {
        opacity: 1;
    }
    z-index: 10;
`

export const Logo = styled.h1`
    font-size: 1.6rem;
    a {
        text-decoration: none;
        color: ${(p) => p.theme.colors.gray};
        transition: all 1s ease;
    }
    a:hover {
        color: ${(p) => p.theme.colors.green};
    }
    @media (max-width: 768px) {
        opacity: 1;
        & a {
            color: ${(p) => p.theme.colors.green};
        }
    }
`
