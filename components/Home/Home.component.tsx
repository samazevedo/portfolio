import { Intro, ButtonBox } from '../Home/Home.style'
import { Container } from '../Container/Container.style'
import { useState, useEffect } from 'react'
import BGImage from '../BGImage/BGImage'
import Typewritter from 'typewriter-effect'
import { Button } from '../Button/Button.component'

const HomeComponent = () => {
    const [greeting, setGreeting] = useState('')
    useEffect(() => {
        const changeGreeting = () => {
            const currentHour = new Date().getHours()
            if (currentHour < 12) {
                setGreeting('Good Morning')
            } else if (currentHour < 18) {
                setGreeting('Good Afternoon')
            } else {
                setGreeting('Good Evening')
            }
        }
        changeGreeting()
    }, [])

    return (
        <Container id='home'>
            <Intro>
                <div>
                    <h2>Hello, {greeting} !</h2>

                    <Typewritter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Welcome to my website!')
                                .pauseFor(30)
                                .deleteAll()
                                .typeString('I am a Web Developer & Designer.')
                                .pauseFor(30)
                                .deleteAll()
                                .typeString(
                                    'I enjoy building interactive and respossible Web Applications.'
                                )
                                .pauseFor(30)
                                .deleteAll()
                                .typeString(` I'm specializing in MERN Stack.`)
                                .pauseFor(300)
                                .deleteAll()
                                .start()
                        }}
                    />
                    <p>
                        Click here to know more <a href='#about'>about me</a>
                    </p>
                    <ButtonBox>
                        <a href='#portfolio'>
                            <Button>see my work</Button>
                        </a>
                        <a href='#contact'>
                            <Button>get in touch</Button>
                        </a>
                    </ButtonBox>
                </div>
            </Intro>
        </Container>
    )
}
export default HomeComponent
