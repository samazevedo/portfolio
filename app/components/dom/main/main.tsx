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
	margin:0 1rem;
	align-items:center;
	justify-items:center;
	display:grid;
	grid-template-rows: repeat(4, 1fr);
`