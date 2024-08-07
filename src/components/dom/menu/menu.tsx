import { SmoothLink } from "../smooth-link/smooth-link"
import { Sheet, SheetTrigger, SheetContent } from "@components/ui/sheet"
import { Button } from "@components/ui/button"
import Socials from "../socials/socials"
import { ModeSwitch } from "../mode-switcher/mode-switch"

export default function Menu() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="ml-auto md:hidden size-10">
					<MenuIcon />
				</Button>
			</SheetTrigger>
			<SheetContent
				side="top"
				className="w-full h-full opacity-50 grid grid-rows-[1.8fr_0.2fr] gap-2 p-2 "
			>
				<div className="grid grid-rows-4 place-items-center text-5xl md:text-8xl">
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
				</div>
				<div className="grid grid-cols-2 place-items-center gap-10  ">
					<Socials />
					<div>
						<ModeSwitch />
					</div>
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
			className="hover:text-lime-400 transition-all duration-300 ease-in-out"
		>
			<line x1="1" x2="20" y1="6" y2="6" />
			<line x1="1" x2="10" y1="10" y2="10" />
			<line x1="1" x2="20" y1="14" y2="14" />
			<line x1="10" x2="20" y1="18" y2="18" />
			<line x1="1" x2="20" y1="22" y2="22" />
		</svg>
	)
}
