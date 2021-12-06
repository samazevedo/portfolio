import styled from 'styled-components'

export const StyledProjectItem = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
    overflow: hidden;
    padding: 5%;
    background-color: rgba(0, 0, 0, 0.5);
    color: ${({ theme }) => theme.colors.white};
`
export const StyledImage = styled.div`
    margin: 0 auto;
    overflow: hidden;
    border: none;
    & img {
        width: 100%;
    }
`
export const StyledTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin: 1rem 0;
`
export const StyledDescription = styled.div`
    font-size: 1rem;
    font-weight: 700;
    & ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        & li {
            margin: 0.5rem 0;
            width: 50%;
        }
    }
`
export const ButtonsBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 20rem;
`
