import Link from "next/link"

export default function Nav() {
	return (
		<nav className="ml-auto hidden md:flex gap-4 sm:gap-6 ">
			<Link
				href="#"
				className="text-sm font-medium hover:underline underline-offset-4"
				prefetch={false}
			>
				Home
			</Link>
			<Link
				href="#about"
				className="text-sm font-medium hover:underline underline-offset-4"
				prefetch={false}
			>
				About
			</Link>
			<Link
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
			</Link>
		</nav>
	)
}
