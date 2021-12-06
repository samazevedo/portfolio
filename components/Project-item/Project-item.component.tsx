import {
    StyledProjectItem,
    StyledImage,
    StyledTitle,
    StyledDescription,
    ButtonsBox,
} from './Project-item.style'
import { Button } from '../Button/Button.component'
interface ProjectProps {
    title: string
    description: string
    projectURL: string
    image: string
    tags: string[]
    githubURL: string
}

export const ProjectItem: React.FC<ProjectProps> = ({
    title,
    description,
    projectURL,
    image,
    tags,
    githubURL,
}) => {
    return (
        <StyledProjectItem>
            <StyledTitle>{title}</StyledTitle>
            <StyledImage>
                <img src={image} alt={title} />
            </StyledImage>
            <StyledDescription>
                <p>{description}</p>
                <ul>
                    {tags.map((tag) => (
                        <li key={tag}>
                            <img src={tag} alt={tag}/>
                            </li>
                    ))}
                </ul>
            </StyledDescription>
            <ButtonsBox>
                <a href={projectURL} target='_blank'>
                    <Button>see live</Button>
                </a>
                <a href={githubURL} target='_blank'>
                    <Button>github</Button>
                </a>
            </ButtonsBox>
        </StyledProjectItem>
    )
}
