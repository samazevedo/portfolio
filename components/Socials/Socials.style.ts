import styled from 'styled-components'

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0.7rem;
`
export const SocialItem = styled.li`
    font-size: 1rem;
    font-weight: 900;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: transform 0.5s;
    &:hover {
        transform: scale(1.2);
    }
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        height: 1rem;
        width: 1rem;
    }
`
