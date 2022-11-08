import styled from 'styled-components'

interface MainProps {
	children: React.ReactNode
}
export default function Main({children}:MainProps) {
	return(
		<MainStyled>{children}</MainStyled>
	)
}

const MainStyled = styled.main`
	width:100%;
	height:100%;
	align-items:center;
	justify-items:center;

`