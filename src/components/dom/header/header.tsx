import Link from "next/link"
import Logo from "../logo/logo"
import Nav from "../nav/nav"
import Menu from "../menu/menu"
import { ModeSwitch } from "../mode-switcher/mode-switch"
import { View } from "@react-three/drei"
import { Ring } from "@components/canvas/ring/ring"
export default function Header() {
	return (
		<header className=" fixed top-0 z-50 w-full grid grid-cols-[1fr_2fr_0.2fr] items-center text-white">
			{/* <Logo /> */}
			<View as="canvas" className="-z-10">
				<Ring radius={2.5} height={0.3} segments={40} text="SAM AZEVEDO  " />
			</View>
			<Nav />
			<Menu />
			{/* <div className="w-9 h-9 p-0 justify-self-end hidden md:grid">
				<ModeSwitch />
			</div> */}
		</header>
	)
}
