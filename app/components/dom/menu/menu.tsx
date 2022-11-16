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
	z-index:3;
  top: 0;
  right: 0;
  background: #393939B5;
	width:100%;
  height: 100%;
	text-shadow: 0 0.01rem 0.1rem #FFFFFF;
  transition: transform 0.3s ease-in-out;
  transform: ${({ menuOpen }) => menuOpen ? 'translateX(30%)' : 'translateX(100%)'};
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
			display: none;
	}
	ul {
		width:100%;
		height: 50%;
		display: grid;
		grid-template-rows: repeat(4, 1fr);
		align-items:start;
		justify-items:start;
	}

  a {
    font-size:${({theme}) => theme.size.lg};
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    transition: color 0.3s linear;
  }
`;