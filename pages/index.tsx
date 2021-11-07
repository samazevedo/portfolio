import React from 'react'
import Head from 'next/head'
import BGImage from '../components/BGImage/BGImage'
import HomeComponent from '../components/Home/Home.component'
import About from '../components/About/About.component'
import Projects from '../components/projects/Projects.comonent'
import Contact from '../components/Contact/Contact.component'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Sam Azevedo</title>
                <link rel='icon' href='/images/glasses-logo.svg' />
            </Head>

            <main>
                <BGImage />
                <HomeComponent />
                <About />
                <Projects />
                <Contact />
            </main>
        </div>
    )
}
