import { Intro } from '../Home/Home.style'
import { Container } from '../Container/Container.style'
import { useState, useEffect } from 'react'
import BGImage from '../BGImage/BGImage'
import Typewritter from 'typewriter-effect'

const HomeComponent = () => {
    const [greeting, setGreeting] = useState('')
    useEffect(() => {
        const changeGreeting = () => {
            const currentHour = new Date().getHours()
            if (currentHour < 12) {
                setGreeting('Good morning')
            } else if (currentHour < 18) {
                setGreeting('Good afternoon')
            } else {
                setGreeting('Good evening')
            }
        }
        changeGreeting()
    }, [])

    return (
        <Container id='home'>
            <BGImage />
            <Intro>
                <div>
                    <h2>Hello =), {greeting}</h2>
                    <h1>Sam Azevedo</h1>
                    <Typewritter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(
                                    'I am a Front End Web Developer & Design.'
                                )
                                .pauseFor(100)
                                .deleteAll()
                                .typeString(
                                    'I enjoy building interactive and resposible web apps.'
                                )
                                .pauseFor(500)
                                .deleteAll()
                                .typeString(` I'm specializing in React.js`)
                                .pauseFor(500)
                                .deleteAll()
                                .start()
                        }}
                    />
                </div>
            </Intro>
        </Container>
    )
}
export default HomeComponent
