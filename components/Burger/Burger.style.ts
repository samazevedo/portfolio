// Burger.styled.js
import styled from 'styled-components'

interface ButtonProps {
    isOpen: boolean
}

export const BurgerStyles = styled.button<ButtonProps>`
    position: fixed;
    content: '';
    top: 2%;
    right: 3%;
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 10;
    & div {
        width: 2rem;
        height: 0.15rem;
        transition: all 0.3s linear;
        transform-origin: 2px;
        background-color: ${({ isOpen }) => (isOpen ? '#fff' : '#CFFA41')};
        &:nth-child(1) {
            transform: ${({ isOpen }) =>
                isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ isOpen }) =>
                isOpen ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
        }
        &:nth-child(3) {
            transform: ${({ isOpen }) =>
                isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
    &:focus {
        outline: none;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        display: none;
    }
`
