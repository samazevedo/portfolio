import { Container } from '../Container/Container.style'
import { PortfolioStyles } from './Portfolio.style'
import { ProjectItem } from '../Project-item/Project-item.component'

export const Portfolio = () => {
    return (
        <Container id='portfolio'>
            <PortfolioStyles>
                <h1>Portfolio</h1>
                <p>
                    The following are my most recent projects. You can also
                    check my Github account for more.
                </p>
                <ProjectItem
                    title='Monsters App'
                    description='my project description'
                    projectURL='http://google.com'
                    image={`/images/projects/monsters-app.png`}
                    tags={['tag1', 'tag2']}
                    githubURL='https://github.com/samazevedo'
                />
            </PortfolioStyles>
        </Container>
    )
}
