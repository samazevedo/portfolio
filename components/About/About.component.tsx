import { Container } from '../Container/Container.style'
import { AboutStyles, ItemsListContainer } from './About.style'

export const About = () => {
    const stackItems = [
        {
            name: 'HTML',
            icon: '/icons/html5.svg',
        },
        {
            name: 'CSS',
            icon: '/icons/css3.svg',
        },
        {
            name: 'Sass',
            icon: '/icons/sass.svg',
        },
        {
            name: 'JavaScript',
            icon: '/icons/javascript.svg',
        },
        {
            name: 'Typescript',
            icon: '/icons/typescript.svg',
        },
        {
            name: 'React',
            icon: '/icons/react.svg',
        },
        {
            name: 'Next.js',
            icon: '/icons/nextdotjs.svg',
        },
        {
            name: 'Node.js',
            icon: '/icons/nodedotjs.svg',
        },
        {
            name: 'Express',
            icon: '/icons/express.svg',
        },
        {
            name: 'MongoDB',
            icon: '/icons/mongodb.svg',
        },
        {
            name: 'Styled Components',
            icon: '/icons/styledcomponents.svg',
        },
    ]

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
                        learning new technologies and tools.
                    </p>
                    <p>
                        I am also currently learning React, TypeScript, and
                        Node.js.
                    </p>
                </div>
                <h2>My Current Stacks Are</h2>
                <ItemsListContainer>
                    {stackItems.map((item) => (
                        <li key={item.name}>
                            <img src={item.icon} alt={item.name} />
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ItemsListContainer>
            </AboutStyles>
        </Container>
    )
}
