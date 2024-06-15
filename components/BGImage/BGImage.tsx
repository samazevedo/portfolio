import Image from "next/image"
import { useState, useEffect } from "react"
import styled from "styled-components"

const Box = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background-color: aliceblue;
	& img {
		opacity: 95%;
		animation: color-change 10s ease-in-out infinite;
	}
	@keyframes color-change {
		0% {
			filter: hue-rotate(0deg);
		}
		50% {
			filter: hue-rotate(360deg);
		}
		100% {
			filter: hue-rotate(0deg);
		}
	}
`

function useWindowSize() {
	const { innerWidth: width, innerHeight: height } = window
	return {
		width,
		height,
	}
}

const BGImage = () => {
	const [width, setWidth] = useState<number>()
	const [height, setHeight] = useState<number>()

	useEffect(() => {
		const { width, height } = useWindowSize()
		setWidth(width)
		setHeight(height)
	}, [])

	useEffect(() => {
		function handleResize() {
			const { width, height } = useWindowSize()
			setWidth(width)
			setHeight(height)
		}
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	})
	if (width && height) {
		return (
			<Box>
				<Image src="/images/sam.jpg" alt="sam" layout="fill" objectFit="cover" />
			</Box>
		)
	} else {
		return null
	}
}
export default BGImage
