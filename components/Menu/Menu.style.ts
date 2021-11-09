// Menu.styled.js
import styled from 'styled-components'

interface NavProps {
    isOpen: boolean
}

export const StyledMenu = styled.nav<NavProps>`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transform: ${({ isOpen }) =>
        isOpen ? 'translateX(50%)' : 'translateX(+100%)'};
    background-color: rgba(0, 0, 0, 0.8);
    transition: transform 0.2s ease-in-out;
    & a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 1rem;
        color: ${(props) => props.theme.colors.green};
        font-weight: bold;
        &:hover {
            color: ${(props) => props.theme.colors.white};
    }
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        display: none;
    }
`
