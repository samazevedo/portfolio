import styled from 'styled-components';

interface MenuProps {
	menuOpen: boolean,
}


export default function Menu({menuOpen}:MenuProps) {
	return(
		<MenuStyled menuOpen={menuOpen}>
			<ul>
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about"> About</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</MenuStyled>
	)
}

 
const MenuStyled = styled.nav<MenuProps>`
	position: fixed;	
  top: 0;
  right: 0;
  background: #393939B5;
	width:100%;
  height: 100%;
	text-shadow: 0 0.01rem 0.1rem #FFFFFF;
  padding: 2rem;
  transition: transform 0.3s ease-in-out;
  transform: ${({ menuOpen }) => menuOpen ? 'translateX(50%)' : 'translateX(100%)'};
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
			display: none;
	}
	ul {
		width:100%;
		display: grid;
		align-items:center;
	}

  a {
    font-size:${({theme}) => theme.size.lg};
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    transition: color 0.3s linear;
  }
`;