import { ThemeProps } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const theme = {
    fonts: {
        basic: 'helvetica, sans-serif',
        mainFont: '"Suwannaphum", serif',
    },
    colors: {
        green: '#CFFA41',
        blue: '#60C2FB',
        orange: '#FF8E25',
        white: '#FFFFFF',
        black: '#000000',
        gray: '#696969',
    },
}

export type MainThemeProps = ThemeProps<typeof theme>
export const GlobalStyle = createGlobalStyle<MainThemeProps>`
html {scroll-behavior: smooth;};
body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.mainFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    *,
    *::after,
    *::before { box-sizing: border-box; }
    h1, h2, h3, h4, h5, h6 { margin: 0; }
    a { 
        color: ${({ theme }) => theme.colors.green};
        text-decoration: none;
     }
    a:hover { color: ${({ theme }) => theme.colors.orange} }
    .main {
    padding: 70px 0 20px;
    min-height: calc(100vh - 50px);
    color: ${({ theme }) => theme.colors.green};
    background-color: rgba(0, 0, 0, 0.75);
    }
`
