import React from 'react'
import Head from 'next/head'
import HomeComponent from '../components/Home/Home.component'
import BGImage from '../components/BGImage/BGImage'
export default function Home() {
    return (
        <div>
            <Head>
                <title>Sam Azevedo</title>
                <link rel='icon' href='/images/glasses-logo.svg' />
            </Head>
            <main>
                <HomeComponent />
            </main>
        </div>
    )
}
