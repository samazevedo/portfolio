// import { useScroll } from "@react-spring/three"
import { useEffect, useState } from "react"

export const useScrollSection = () => {
	const [section, setSection] = useState(0)

	// const { scrollY } = useScroll()

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			const windowHeight = window.innerHeight
			const newSection = Math.floor(scrollPosition / windowHeight)
			setSection(newSection)
		}

		window.addEventListener("scroll", handleScroll)
		console.log(section)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [section])

	return section
}
