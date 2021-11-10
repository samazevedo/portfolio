import { StyledButton } from './Button.style'

interface IButtonProps {
    children?: string
}
export const Button: React.FC<IButtonProps> = ({ children }) => {
    return (
        <StyledButton>
            <span>{children}</span>
        </StyledButton>
    )
}
