import { ReactLenis } from "lenis/react"
export const Layout = ({ children }: { children: React.ReactNode }) => {
	return <ReactLenis root>{children}</ReactLenis>
}
