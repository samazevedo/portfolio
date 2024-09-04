import Link from "next/link"
import Logo from "../logo/logo"
import Nav from "../nav/nav"
import Menu from "../menu/menu"
import { ModeSwitch } from "../mode-switcher/mode-switch"
export default function Header() {
	return (
		<header className=" fixed top-0 z-50 w-full grid grid-cols-2 md:grid-cols-3   items-center px-2 py-2 z-5">
			<Logo />
			<Nav />
			<Menu />
			<div className="w-9 h-9 p-0 justify-self-end hidden md:grid">
				<ModeSwitch />
			</div>
		</header>
	)
}
