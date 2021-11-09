import styled from 'styled-components'

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        display: none;
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
`
export const NavItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    &:not(:last-child) {
        margin-right: 1rem;
    }
    & a {
        color: ${(p) => p.theme.colors.gray};
        transition: all 1s ease;
        &:hover {
            color: ${(p) => p.theme.colors.green};
        }
    }
    & a.active {
        color: ${(p) => p.theme.colors.green};
    }
`
