import Lenis from "lenis"

let lenis: Lenis | null = null

const initializeLenis = () => {
	if (!lenis) {
		lenis = new Lenis({
			duration: 2.2,
			easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			lerp: 5.15,
			touchMultiplier: 2,
			infinite: false,
		})

		const raf = (time: number) => {
			lenis!.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}

	return lenis
}

export const smoothScroll = (target: string) => {
	const lenis = initializeLenis()
	const element = document.getElementById(target)

	if (!element || !lenis) return
	const top = element.getBoundingClientRect().top + window.scrollY

	lenis.scrollTo(top)
}
