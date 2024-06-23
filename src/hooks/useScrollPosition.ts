import { useState, useEffect } from "react"

export const useScrollPosition = () => {
	const [scrollYPosition, setScrollYPosition] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setScrollYPosition(window.scrollY)
		}

		window.addEventListener("scroll", handleScroll)

		return () => window.removeEventListener("scroll", handleScroll)
	})

	return scrollYPosition
}
