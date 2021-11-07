import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document'

export default class MyDocument extends Document {
    render() {
        const description = 'Front-End Web Developer'
        const fontURL =
            'https://fonts.googleapis.com/css2?family=Suwannaphum:wght@100&display=swap'
        return (
            <Html lang='en'>
                <Head>
                    <meta name='description' content={description} />
                    <link href={fontURL} rel='stylesheet' />
                    {this.props.styles}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
}
