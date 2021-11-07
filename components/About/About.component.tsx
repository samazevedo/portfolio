import { Center } from '../Center/Center.style'
import { Container } from '../Container/Container.style'
import { AboutStyle } from './About.style'

const About = () => {
    return (
        <Container>
            <Center>
                <AboutStyle>
                    <div id='about'>
                        <h1>About</h1>
                    </div>
                </AboutStyle>
            </Center>
        </Container>
    )
}
export default About
