import styled from 'styled-components'

interface headerProps {
  children?: React.ReactNode
}
export default function Header({ children }: headerProps) {
  return <HeaderStyled className='main-header'>{children}</HeaderStyled>
}

const HeaderStyled = styled.header`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
  justify-items: center;
	margin:0 0.5rem;
`
