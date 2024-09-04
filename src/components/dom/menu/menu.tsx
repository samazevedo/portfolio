import { SmoothLink } from "../smooth-link/smooth-link"
import { Sheet, SheetTrigger, SheetContent } from "@components/ui/sheet"
import { Button } from "@components/ui/button"
import Socials from "../socials/socials"
import { ModeSwitch } from "../mode-switcher/mode-switch"
import { AnimatedIcon } from "../animated-icon/animated-icon"
export default function Menu() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="ml-auto md:hidden size-10">
					<HamburgerMenu />
				</Button>
			</SheetTrigger>
			<SheetContent
				side="top"
				className="w-full h-full grid grid-rows-[1.8fr_0.2fr]  dark:lime-500"
			>
				<div className="grid grid-rows-4 place-items-center text-4xl md:text-8xl mt-20 ">
					<SmoothLink href="home" prefetch={false} className="hover:text-lime-500 ">
						Home
					</SmoothLink>
					<SmoothLink href="about" prefetch={false} className="hover:text-lime-500 ">
						About
					</SmoothLink>
					<SmoothLink
						href="portfolio"
						prefetch={false}
						className="hover:text-lime-500 "
					>
						Portfolio
					</SmoothLink>
					<SmoothLink
						href="contact"
						prefetch={false}
						className="hover:text-lime-500 "
					>
						Contact
					</SmoothLink>
				</div>
				<div className="place-self-center">
					<div className="grid grid-cols-2 max-w-3xl  ">
						<Socials />
						<div className="justify-self-end self-center">
							<ModeSwitch />
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}

// hamburger menu
const HamburgerMenu = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect y="4" width="24" height="2" rx="1" fill="currentColor" />
		<rect y="11" width="24" height="2" rx="1" fill="currentColor" />
		<rect y="18" width="24" height="2" rx="1" fill="currentColor" />
	</svg>
)
