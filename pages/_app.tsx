import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { Header } from '../components/Header/Header.component'
import { Footer } from '../components/Footer/Footer.component'
import { Container } from '../components/Container/Container.style'
import { About } from '../components/About/About.component'
import { Portfolio } from '../components/Portfolio/Portfolio.component'
import { GlobalStyle, theme } from '../shared/theme'
import { Contact } from '../components/Contact/Contact.component'

export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Next.js with styled-components</title>
            </Head>
            <GlobalStyle />
            <Head>
                <title>What's next?</title>
            </Head>
            <Header />
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
    )
}
