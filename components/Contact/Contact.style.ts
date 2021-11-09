import styled from 'styled-components'

export const ContactStyles = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        display: grid;
        max-width: 60rem;
        grid-template-rows: 1fr 1fr;
        margin: 0 auto;
        padding: 0 3rem;
    }
`
