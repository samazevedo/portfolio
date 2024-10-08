import Link from "next/link"
import Image from "next/image"
import { Ring } from "@components/canvas/ring/ring"

import Socials from "../socials/socials"
import { View, GradientTexture, Sparkles, Html } from "@react-three/drei"

export default function Hero() {
	// const { theme } = useTheme()
	// const bg = theme === "dark" ? "#1C1C1C" : "#8d8b8e"

	return (
		<section className="relative w-full h-screen">
			<div className=" grid grid-rows-[1fr_0.5fr_1fr]  gap-5 pt-80">
				<h1 className="text-5xl font-bold tracking-tighter  justify-self-center sm:text-5xl md:text-6xl text-lime-400">
					Sam Azevedo
				</h1>

				<div className="text-center space-y-4 max-w-2xl px-4 md:px-6 place-self-center mt-1">
					<p className="text-lg  text-white  sm:text-md md:text-xl">
						Front End Web Developer | Designer
					</p>
				</div>

				<div className="flex flex-col gap-2 min-[400px]:flex-row self-end justify-center">
					<Socials />
				</div>
			</div>
		</section>
	)
}
