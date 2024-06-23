import { SmoothLink } from "../smooth-link/smooth-link"
import { Sheet, SheetTrigger, SheetContent } from "@components/ui/sheet"
import { Button } from "@components/ui/button"

export default function Menu() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="ml-auto md:hidden">
					<MenuIcon />
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<div className="grid gap-2 py-6">
					<SmoothLink
						href="home"
						className="flex w-full items-center py-2 text-lg font-semibold"
						prefetch={false}
					>
						Home
					</SmoothLink>
					<SmoothLink
						href="about"
						className="flex w-full items-center py-2 text-lg font-semibold"
						prefetch={false}
					>
						About
					</SmoothLink>
					<SmoothLink
						href="portfolio"
						className="flex w-full items-center py-2 text-lg font-semibold"
						prefetch={false}
					>
						Portfolio
					</SmoothLink>
					<SmoothLink
						href="contact"
						className="flex w-full items-center py-2 text-lg font-semibold"
						prefetch={false}
					>
						Contact
					</SmoothLink>
				</div>
			</SheetContent>
		</Sheet>
	)
}

// hamburger menu
function MenuIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="1" x2="20" y1="6" y2="6" />
			<line x1="1" x2="10" y1="10" y2="10" />
			<line x1="1" x2="20" y1="14" y2="14" />
			<line x1="10" x2="20" y1="18" y2="18" />
			<line x1="1" x2="20" y1="22" y2="22" />
		</svg>
	)
}
