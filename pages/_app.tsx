import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { Header } from '../components/Header/Header.component'
import { Footer } from '../components/Footer/Footer.component'
import { Center } from '../components/Center/Center.style'
import { GlobalStyle, theme } from '../shared/theme'

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
            <main className='main'>
                <Center>
                    <Component {...pageProps} />
                </Center>
            </main>
            <Footer />
        </ThemeProvider>
    )
}
