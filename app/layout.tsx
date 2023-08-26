'use client'
import type { Metadata } from 'next'
import { ChakraProvider } from '@chakra-ui/react'

import { Footer } from '@/components/dom/footer'
import { theme } from '@/theme/theme'
import { Header } from '@/components/dom/header'

// export const metadata: Metadata = {
//     title: 'Sam Azevedo',
//     description: 'Web Developer | Designer ',
// }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body>
                <ChakraProvider theme={theme}>
                    <Header />
                    {children}
                    <Footer />
                </ChakraProvider>
            </body>
        </html>
    )
}
