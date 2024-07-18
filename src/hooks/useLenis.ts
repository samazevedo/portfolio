import { useEffect } from "react"
import Lenis from "lenis"

export const useLenis = () => {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 2.1,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			lerp: 3.15,
			touchMultiplier: 2,
			infinite: false,
		})

		const raf = (time: number) => {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)

		return () => {
			lenis.destroy()
		}
	}, [])
}
