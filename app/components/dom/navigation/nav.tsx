import { StyledNav, StyledNavList } from './nav.styled'

export default function Nav() {
  return (
    <StyledNav>
      <StyledNavList>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </StyledNavList>
    </StyledNav>
  )
}
