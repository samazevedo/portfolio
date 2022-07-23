import styled from 'styled-components'

export const StyledButton = styled.button`
    width: 6rem;
    height: 2rem;
    background-color: ${(props) => props.theme.colors.gray};
    border: none;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.white};
    font-size: 0.5rem;
    padding: 0.3rem 0.7rem;
    text-transform: uppercase;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    & a {
        color: ${(props) => props.theme.colors.white};
    }
    & a:hover {
        color: ${(props) => props.theme.colors.gray};
    }
    &:hover {
        background-color: ${(props) => props.theme.colors.green};
        color: ${(props) => props.theme.colors.white};
    }
    &:active {
        transform: scale(0.95);
    }
`
