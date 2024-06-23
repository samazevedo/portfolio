import { useLenis } from "lenis/react"

export const useSmoothScroll = () => {
	useLenis(({ scroll }) => {
		// callback is called on every scroll
		console.log(scroll)
	})
}
