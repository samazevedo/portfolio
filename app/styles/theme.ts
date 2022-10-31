import { ThemeProps } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const darkTheme = {
  color: '#DBE8B3',
  text: '#363636',
  toggleBorder: '#ffffff',
  background: '#363636',
  filter:
    'invert(93%) sepia(24%) saturate(362%) hue-rotate(20deg) brightness(95%) contrast(93%)',
}
export const lightTheme = {
  color: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#EBFFB4',
  background: '#DBE8B3',
  filter:
    'invert(17%) sepia(1%) saturate(2939%) hue-rotate(20deg) brightness(106%) contrast(89%)',
}

export type MainThemeProps = ThemeProps<typeof darkTheme>
export const GlobalStyles = createGlobalStyle<MainThemeProps>`

html,
body,
#root {
  padding: 0;
  margin:0;
  width:100%;
  height: 100%;
	background-color: ${({ theme }) => theme.background};
	color:${({ theme }) => theme.color};
	transition: all 0.5s ease-in-out ;

}
html {
  scroll-behavior: smooth;
  font-size: 10px;
}
*,
*::before, 
*::after {
  box-sizing:border-box;
}
a {
  text-decoration: none;
	color:${({ theme }) => theme.color};
	
}
img {
	color:${({ theme }) => theme.color};

}
ul,
li {
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin:0;
}
button {
	border: none;
	outline: none;
	color: ${({ theme }) => theme.background}
	background-color: ${({ theme }) => theme.background}
	
}
.socials img {
	filter: ${({ theme }) => theme.filter}

}
`
