import { Center } from '../Center/Center.style'
import { Container } from '../Container/Container.style'
import { useState, useEffect } from 'react'
import Socials from '../Socials/Socials.component'
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
        <div id='home'>
            <Container>
                <Center>
                    <h2>Hello, {greeting}</h2>
                    <h1>Sam Azevedo</h1>
                    <p>I'm a Frontend Developer from Sao Paulo.</p>
                    <Socials />
                </Center>
            </Container>
        </div>
    )
}
export default HomeComponent
