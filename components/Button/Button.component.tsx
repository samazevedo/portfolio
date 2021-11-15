import { StyledButton } from './Button.style'

interface IButtonProps {
    children?: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    className?: string
    form?: string
}

export const Button: React.FC<IButtonProps> = ({ children, ...allProps }) => {
    return (
        <StyledButton {...allProps}>
            <span>{children}</span>
        </StyledButton>
    )
}
