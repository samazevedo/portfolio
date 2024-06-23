import Link from "next/link"
import { SmoothLink } from "../smooth-link/smooth-link"
import { useLenis } from "@hooks/useLenis"

export default function Nav() {
	useLenis()
	return (
		<nav className="ml-auto hidden md:flex gap-4 sm:gap-6 ">
			{/* <Link
				href="#"
				className="text-sm font-medium hover:underline underline-offset-4"
				prefetch={false}
			> */}
			<SmoothLink href="home" prefetch={false}>
				Home
			</SmoothLink>
			<SmoothLink href="about" prefetch={false}>
				About
			</SmoothLink>
			<SmoothLink href="portfolio" prefetch={false}>
				Portfolio
			</SmoothLink>
			<SmoothLink href="contact" prefetch={false}>
				Contact
			</SmoothLink>
			{/* </Link> */}
			{/* <Link
				href="#about"
				className="text-sm font-medium hover:underline underline-offset-4"
				prefetch={false}
			>
				About
			</Link> */}

			{/* <Link
				href="#portfolio"
				className="text-sm font-medium hover:underline underline-offset-4"
				prefetch={false}
			>
				Portfolio
			</Link>
			<Link
				href="#contact"
				className="text-sm font-medium hover:underline underline-offset-4"
				prefetch={false}
			>
				Contact
			</Link> */}
		</nav>
	)
}
