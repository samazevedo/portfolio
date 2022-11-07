import styled from "styled-components"

export default function Burger() {
	return(
		<BurgerStyled>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</BurgerStyled>
	)
}

const BurgerStyled = styled.div`
	position: absolute;
	top:3%;
  right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
	align-items: center;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: crosshair;
  padding: 0;
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

`
