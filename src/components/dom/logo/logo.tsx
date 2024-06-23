import { SmoothLink } from "../smooth-link/smooth-link"

export default function Logo() {
	return (
		<SmoothLink
			href="home"
			className="inline-flex items-center gap-2"
			prefetch={false}
		>
			<span className="text-xl font-bold">Sam Azevedo</span>
		</SmoothLink>
	)
}
