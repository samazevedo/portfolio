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
                    title='Next JS Blog'
                    description='This is a simple blog website built using React, Next JS, Typescript, Gray Matter and MongoDB. '
                    projectURL='https://next-blog-delta-puce.vercel.app/'
                    image={`/images/projects/next-blog.png`}
                    tags={[
                        `/icons/react.svg`,
                        `/icons/nextdotjs.svg`,
                        `/icons/mongodb.svg`,
                        `/icons/typescript.svg`,
                    ]}
                    githubURL='https://github.com/samazevedo/next-blog'
                />
            </PortfolioStyles>
        </Container>
    )
}
