import styled from "styled-components"

interface BurgerProps {
	menuOpen: boolean ,
	setMenuOpen: (args:boolean) => void
}

export default function Burger({menuOpen, setMenuOpen}:BurgerProps) {
	

	return(
		<>
			<BurgerStyled menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>				
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
			</BurgerStyled>			
		</>
	)
}


const BurgerStyled = styled.div<{menuOpen:boolean}>`
	position: absolute;
	top:3%;
  right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
	align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: crosshair;
  padding: 0;
	z-index:3;
  &:focus {
    outline: none;
  }
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		display: none;
	}
  
  & .line {
		width:100%;
    height: 0.2rem;
    background: ${({theme}) => theme.colors.primary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
	& :first-child {
      transform: ${({ menuOpen }) => menuOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

	& :nth-child(2) {
      opacity: ${({ menuOpen }) => menuOpen ? '0' : '1'};
      transform: ${({ menuOpen }) => menuOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

	& :nth-child(3) {
      transform: ${({ menuOpen }) => menuOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }

`