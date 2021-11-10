import {
    StyledProjectItem,
    StyledImage,
    StyledTitle,
    StyledDescription,
} from './Project-item.style'
import { Button } from '../Button/Button.component'
interface ProjectProps {
    title: string
    description: string
    link: string
    image: string
    tags: string[]
    github: string
    live: string
}

export const ProjectItem: React.FC<ProjectProps> = ({
    title,
    description,
    link,
    image,
    tags,
    github,
    live,
}) => {
    return (
        <StyledProjectItem>
            <StyledTitle>
                <span>{title}</span>
            </StyledTitle>
            <StyledImage>
                <img src={image} alt={title} />
            </StyledImage>
            <StyledDescription>
                {description}
                <a href={link}>{link}</a>
                <ul>
                    {tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
            </StyledDescription>
            <div>
                <Button>{live}</Button>
                <Button>{github}</Button>
            </div>
        </StyledProjectItem>
    )
}
