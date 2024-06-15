import React from "react"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import { Header } from "../components/Header/Header.component"
import { Footer } from "../components/Footer/Footer.component"
import { Container } from "../components/Container/Container.style"
import { About } from "../components/About/About.component"
import { Portfolio } from "../components/Portfolio/Portfolio.component"
import { GlobalStyle, theme } from "../shared/theme"
import { Contact } from "../components/Contact/Contact.component"
import BGImage from "../components/BGImage/BGImage"
export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Head>
					<title>Sam Azevedo</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<Header />
				<BGImage />
				<main>
					<Container>
						<Component {...pageProps} />
					</Container>
					<About />
					<Portfolio />
					<Contact />
				</main>
				<Footer />
			</ThemeProvider>
		</>
	)
}
