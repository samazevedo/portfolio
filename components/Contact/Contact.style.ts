import styled from 'styled-components'

export const ContactStyles = styled.div`
    z-index: 5;
    padding: 5%;
    font-weight: 500;
    & h1 {
        font-size: 2rem;
        margin-top: 1rem;
    }
    a {
        font-weight: bolder;
    }
    & p {
        padding: 0;
        margin: 0;
        margin-left: 0.5rem;
    }
`
export const Container = styled.div`
    position: relative;
    display: grid;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 80rem;
    max-height: 80vh;
    margin: auto;
`
