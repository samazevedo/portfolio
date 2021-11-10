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
export const ItemsListContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        font-size: 0.7rem;
        transition: all 0.3s ease-in-out;
        overflow: hidden;
        color: ${({ theme }) => theme.colors.white};
        img {
            max-width: 50px;
        }
        &:hover {
            transform: scale(1.2);
        }
    }
`
