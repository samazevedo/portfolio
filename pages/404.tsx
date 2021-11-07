import styled from 'styled-components'

export default function NotFound() {
    return (
        <Container>
            <Main>404</Main>
            Oops! The page not found.!!!
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Main = styled.h2`
    font-size: 10rem;
    line-height: 11rem;
    font-family: ${(p) => p.theme.fonts.accent};
    width: 100%;
`
