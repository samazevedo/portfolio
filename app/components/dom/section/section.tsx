import styled from "styled-components";

interface SectionProps {
	title: string
	children?: React.ReactNode
	id: string
}

export default function Section({title, id, children}:SectionProps) {
	return (
		<SectionStyled id={id}>
			<h2>{title}</h2>
			{children}
		</SectionStyled>
	)
}

const SectionStyled = styled.section`
	width:100%;
	height:100vh;
`