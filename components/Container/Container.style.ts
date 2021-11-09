import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    align-items: center;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    max-width: 80rem;
    min-height: 100vh;
    margin: auto;
    @media (max-width: 800px) {
        max-width: 520px;
        padding: 0 15px;
    }
`
