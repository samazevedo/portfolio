import { Container } from '../Container/Container.style'
import { PortfolioStyles } from './Portfolio.style'

export const Portfolio = () => {
    return (
        <Container id='portfolio'>
            <PortfolioStyles>
                <div>
                    <h1>Projects</h1>
                    <p>Here are some of the projects I've worked on.</p>
                    <div>
                        <h1>Project 1</h1>
                        <div>project image</div>

                        <div>
                            <p>project description</p>
                            <div>project stack</div>
                            <button> deployed website</button>{' '}
                            <button>github</button>
                        </div>
                    </div>
                    <div>
                        <h1>Project 2</h1>
                        <div>project image</div>

                        <div>
                            <p>project description</p>
                            <div>project stack</div>
                            <button> deployed website</button>{' '}
                            <button>github</button>
                        </div>
                    </div>
                    <div>
                        <h1>Project 3</h1>
                        <div>project image</div>

                        <div>
                            <p>project description</p>
                            <div>project stack</div>
                            <button> deployed website</button>{' '}
                            <button>github</button>
                        </div>
                    </div>
                </div>
            </PortfolioStyles>
        </Container>
    )
}
