import styled from 'styled-components'

export const AboutStyles = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${({ theme }) => theme.colors.green};
    }
    padding: 2rem;
`
