import { Container } from '../Container/Container.style'
import { AboutStyles } from './About.style'

export const About = () => {
    return (
        <Container id='about'>
            <AboutStyles>
                <h1>About Me</h1>
                <p>
                    I am a Web Developer based in Sao Paulo, with a passion for
                    creating beautiful and intuitive user interfaces. I have a
                    strong background in both front-end development, and I am
                    constantly learning new technologies and frameworks.
                </p>
                <p>
                    I am currently learning React, TypeScript, and Node.js. I am
                    also working on a full-stack application using MERN stack.
                </p>
                <h2>My Current Stacks Are</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>SASS</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>Mongoose</li>
                </ul>
            </AboutStyles>
        </Container>
    )
}
