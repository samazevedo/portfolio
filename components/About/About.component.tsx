import { Container } from '../Container/Container.style'
import { AboutStyles } from './About.style'

export const About = () => {
    return (
        <Container id='about'>
            <AboutStyles>
                <h1>About Me</h1>
                <div>
                    <p>
                        I am a Web Developer based in Sao Paulo Brazil, with a
                        passion for creating beautiful and intuitive user
                        interfaces. I have a strong fundation in front-end
                        development concepts, resposive layouts and in the
                        creation of clean and reusable code. I am constantly
                        learning new technologies and frameworks.
                    </p>
                    <p>
                        I am also currently learning React, TypeScript, and
                        Node.js.
                    </p>
                </div>
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
