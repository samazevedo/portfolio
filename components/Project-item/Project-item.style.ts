import styled from 'styled-components'

export const StyledProjectItem = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
    overflow: hidden;
    padding: 5%;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
`
export const StyledImage = styled.div`
    max-height: 450px;
    max-width: 550px;
    margin: 0 auto;
    overflow: hidden;
    border: 15px solid white;
    border-radius: 5px;
    & img {
        width: 100%;
    }
`
export const StyledTitle = styled.h3`
    font-size: 1.7rem;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.green};
`
export const StyledDescription = styled.p`
    font-size: 1rem;
    font-weight: 700;
`
