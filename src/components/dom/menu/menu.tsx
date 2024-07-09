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
				className="w-full h-full opacity-70 grid grid-rows-2 gap-2 p-2 "
			>
				<div className="grid gap-2 py-6 w-full h-full text-center mt-40 first:text-8xl font-bold ">
					<SmoothLink
						href="home"
						prefetch={false}
						className="hover:text-lime-400 transition-all duration-300 ease-in-out "
					>
						Home
					</SmoothLink>
					<SmoothLink
						href="about"
						prefetch={false}
						className="hover:text-lime-400 transition-all duration-300 ease-in-out"
					>
						About
					</SmoothLink>
					<SmoothLink
						href="portfolio"
						prefetch={false}
						className="hover:text-lime-400 transition-all duration-300 ease-in-out"
					>
						Portfolio
					</SmoothLink>
					<SmoothLink
						href="contact"
						prefetch={false}
						className="hover:text-lime-400 transition-all duration-300 ease-in-out"
					>
						Contact
					</SmoothLink>
				</div>
				<div className="grid grid-cols-2   h-5 align-items-center align-items-end mt-[32rem]">
					<Socials />
					<ModeSwitch />
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
