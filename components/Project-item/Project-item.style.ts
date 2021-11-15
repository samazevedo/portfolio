import styled from 'styled-components'

export const StyledProjectItem = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
    overflow: hidden;
    padding: 5%;
    background-color: rgba(255, 255, 255, 0.5);
    color: ${({ theme }) => theme.colors.black};
`
export const StyledImage = styled.div`
    max-height: 450px;
    max-width: 550px;
    margin: 0 auto;
    overflow: hidden;
    border: 15px solid ${({ theme }) => theme.colors.green};
    border-radius: 5px;
    & img {
        width: 100%;
    }
`
export const StyledTitle = styled.h3`
    font-size: 1.7rem;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.black};
`
export const StyledDescription = styled.div`
    font-size: 1rem;
    font-weight: 700;
    & ul {
        list-style: none;
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    }
`
export const ButtonsBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 20rem;
`
