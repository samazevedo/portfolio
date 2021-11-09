import { Intro } from '../Home/Home.style'
import { Container } from '../Container/Container.style'
import { useState, useEffect } from 'react'
import Socials from '../Socials/Socials.component'
import BGImage from '../BGImage/BGImage'

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
                    <h2>Hello, {greeting}</h2>
                    <h1>Sam Azevedo</h1>
                    <p>Frontend Web Developer | Design</p>
                </div>
            </Intro>
        </Container>
    )
}
export default HomeComponent
