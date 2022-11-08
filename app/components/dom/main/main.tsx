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
	max-width: 90rem;
	height:100%;
	display:grid;
	align-items:center;
	justify-items:center;
	margin:0 auto;
	padding:0 2rem;
`