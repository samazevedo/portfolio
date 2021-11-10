import { Container } from '../Container/Container.style'
import { PortfolioStyles } from './Portfolio.style'
import { ProjectItem } from '../Project-item/Project-item.component'
export const Portfolio = () => {
    return (
        <Container id='portfolio'>
            <PortfolioStyles>
                <h1>Portfolio</h1>
                <p> Here are some of my recent projects</p>

                <ProjectItem
                    title='Monsters App'
                    image='images/projects/monsters-app.png'
                    description='This is a simple Project using React. This project also make use of API consumming and React Hooks.'
                    link='project stack'
                    github='github'
                    live='deployed website'
                    tags={['react', 'redux', 'styled-components']}
                />
            </PortfolioStyles>
        </Container>
    )
}
