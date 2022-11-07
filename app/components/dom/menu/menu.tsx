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

const MenuStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #C4FE7216;${({ menuOpen }) => menuOpen ? '#C4FE7216' : '#C4FE7216'};
	width:100vw;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ menuOpen }) => menuOpen ? 'translateX(50%)' : 'translateX(100%)'};
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
			display: none;
	}

  a {
    font-size:${({theme}) => theme.size.lg};
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    transition: color 0.3s linear;
  }
`;