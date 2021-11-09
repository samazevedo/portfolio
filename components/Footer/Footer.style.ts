import styled from 'styled-components'
export const Container = styled.footer`
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px;
    color: ${({ theme }) => theme.colors.white};
    background-color: rgba(0, 0, 0, 0.5);
    & a {
        color: ${({ theme }) => theme.colors.white};
        transition: all 0.3s ease-in-out;
        &:hover {
            color: ${({ theme }) => theme.colors.green};

    }
`
