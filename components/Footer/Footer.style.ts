import styled from 'styled-components'
export const Container = styled.footer`
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px;
    height: 50px;
    color: ${({ theme }) => theme.colors.white};
    background-color: rgba(0, 0, 0, 0.5);
`
