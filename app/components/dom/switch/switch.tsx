import { useAtom } from "jotai"
import { themeAtom } from "../../../hooks/store"
import styled from "styled-components"

interface SwitchProps {
	handleTheme: () => void
	theme: string
}

export default function Switch({handleTheme, theme}:SwitchProps) {

	// const [theme, setTheme] = useAtom(themeAtom)

	// const toggleTheme  = ()  => {
	// 	theme === 'dark' ? setTheme('light') : setTheme('dark')
	// }

	return(
		<SwitchStyled className="switch">
			<input type="checkbox"
				checked={theme === 'dark'}
				onChange={handleTheme}
			 />
		</SwitchStyled>
	)
}


const SwitchStyled = styled.label`
	z-index: 900;
	position: absolute;
	top: 0;
	left: 5%;
`