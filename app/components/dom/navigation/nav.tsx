import styled from 'styled-components'

export default function Nav() {
  return (
    <NavStyled>
			<ul>
				<li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
			</ul>
    </NavStyled>
  )
}

export const NavStyled = styled.nav`
  width: 100%;
	& ul {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;
		justify-items: center;
		z-index: 10;
		@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		display: none;
  	}
	}
`
export const StyledNavList = styled.ul`
  
`
