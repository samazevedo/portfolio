import styled from "styled-components"

export default function Logo() {
  return (
    <LogoStyled className='logo'>
      <a href='#home'>Sam Azevedo</a>
    </LogoStyled>
  )
}

const LogoStyled = styled.div `
	font-size: ${({theme}) => theme.size.xl};
	
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		font-size: ${({theme}) => theme.size.md};
  }
`
