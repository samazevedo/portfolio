import { smoothScroll } from "@utils/smoothScroll"
import Link, { LinkProps } from "next/link"
import { useLenis } from "lenis/react"

interface SmoothLinkProps extends LinkProps {
	href: string
	children: React.ReactNode
	className?: string
}

export const SmoothLink = ({
	href,
	children,
	className,
	...props
}: SmoothLinkProps) => {
	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()

		smoothScroll(href)
	}

	return (
		<Link
			{...props}
			href={href}
			prefetch={false}
			scroll={false}
			onClick={handleClick}
			className={className}
		>
			{children}
		</Link>
	)
}
