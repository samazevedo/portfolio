import { ThemeProps } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import localFont from '@next/font/local'

const mainFont = localFont({
  src: './../assets/fonts/Bulgatry/Bulgatry.otf',
})

export const darkTheme = {
	fonts:{
		main: mainFont,
		secondary: 'sans-serif',
	},
	colors: {
		background:'#434343',
		primary:'##c3fe72',
		secondary:'#8F95D3',
		text:'#F4F7F5',
		btnText:'#F4F7F5',
		btnBG: '#a288e3',
		filter:'invert(83%) sepia(22%) saturate(919%) hue-rotate(37deg) brightness(109%) contrast(99%);',
		fiterReversed:'invert(62%) sepia(29%) saturate(484%) hue-rotate(197deg) brightness(92%) contrast(93%);',
	},
	breakpoints:{
		mobile:'640px',
		tablet:'768px',
		laptop:'1024px',
		desktop:'1536px'
	},
	size:{
		xs: '0.75rem',
		sm: '0.875rem',
		md: '1rem',
		lg: '1.125rem',
		xl: '1.5rem',
		xxl: '2rem',
		xxxl: '3.0rem',
	}
}
export const lightTheme = {
	fonts:{
		main: "mainFont",
		secondary: 'sans-serif',
	},
	colors: {
		background:'#434343',
		primary:'##c3fe72',
		secondary:'#a288e3',
		text:'#F4F7F5',
		btnText:'#F4F7F5',
		btnBG: '#a288e3',
		filter:'invert(62%) sepia(29%) saturate(484%) hue-rotate(197deg) brightness(92%) contrast(93%);',
		fiterReversed:'invert(83%) sepia(22%) saturate(919%) hue-rotate(37deg) brightness(109%) contrast(99%);',
	},
	breakpoints:{
		mobile:'640px',
		tablet:'768px',
		laptop:'1024px',
		desktop:'1536px'
	},
	size:{
		xs: '0.75rem',
		sm: '0.875rem',
		md: '1.0rem',
		lg: '1.125rem',
		xl: '1.5rem',
		xxl: '2.0rem',
		xxxl: '3.0rem',
	},
  color: '#0F0F0F',
  text: '#DCDCDC',
  toggleBorder: '#DCDCDC',
  background: '#DCDCDC',
  btnColor: '#DCDCDC',
  btnBackground: '#0F0F0F',
  filter:
    'invert(17%) sepia(1%) saturate(2939%) hue-rotate(20deg) brightness(106%) contrast(89%)',
  filterReversed:
    'invert(93%) sepia(24%) saturate(362%) hue-rotate(20deg) brightness(95%) contrast(93%)',
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
	background-color: ${({ theme }) => theme.colors.background};
	color:${({ theme }) => theme.colors.primary};
	transition: all 0.5s ease-in-out ;
	font-family: ${({theme})=> theme.fonts.main}
}
html {
  font-size:10px;
  scroll-behavior: smooth;
}
*,
*::before, 
*::after {
  box-sizing:border-box;
}
a {
  text-decoration: none;
  cursor: crosshair;
	color:${({ theme }) => theme.colors.secondary};
	&:hover {
		color:${({ theme }) => theme.colors.primary};
	}
}
img {
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
h6,
p {
  margin:0;
	letter-spacing: ${({theme}) => theme.size.xs};
}

p {
	color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.size.sm};
	letter-spacing: ${({theme}) => theme.size.xs};
	line-height: ${({theme}) => theme.size.xxxl};

}

button {
	border: none;
	outline: none;
}
.socials img {
}
.theme-btn {
}
.theme-btn img {
}
h1 {
	font-size: ${({theme}) => theme.size.xxl};
	color: ${({theme}) => theme.colors.primary};
}
h2 {
	font-size: ${({theme}) => theme.size.xl};
	color: ${({theme}) => theme.colors.secondary};
}
h3{
	 ${({theme}) => theme.size.lg};
}


`
