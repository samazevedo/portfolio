import React from 'react'
import Head from 'next/head'

export default function Home() {
    return (
        <div className='container'>
            <Head>
                <title>Sam Azevedo</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>Hello World</main>
        </div>
    )
}
