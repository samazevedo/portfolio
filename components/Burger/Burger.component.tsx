import { BurgerStyles } from './Burger.style'
import { bool, func } from 'prop-types'

interface BurgerProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const Burger: React.FC<BurgerProps> = ({ isOpen, setIsOpen }) => {
    return (
        <BurgerStyles isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <div />
            <div />
            <div />
        </BurgerStyles>
    )
}
Burger.propTypes = {
    isOpen: bool.isRequired,
    setIsOpen: func.isRequired,
}
