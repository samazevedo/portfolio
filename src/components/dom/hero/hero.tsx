import Link from "next/link"
import Image from "next/image"

import Socials from "../socials/socials"

export default function Hero() {
	// const { theme } = useTheme()
	// const bg = theme === "dark" ? "#1C1C1C" : "#8d8b8e"

	return (
		<section className="relative w-full h-[100vh] md:h-[100vh] lg:h-[100vh] overflow-hidden bg-black">
			<div className="absolute inset-0  grid grid-rows-[1.5fr_1.0fr_0.5fr] justify-center">
				<div className="text-center space-y-4 max-w-2xl px-4 md:px-6 self-end">
					{/* <h1 className="text-5xl font-bold tracking-tighter   sm:text-5xl md:text-6xl text-lime-600 dark:text-lime-600">
						Sam Azevedo
					</h1> */}
				</div>

				<div className="text-center space-y-4 max-w-2xl px-4 md:px-6 self-start mt-1">
					{/* <p className="text-lg text-gray-500 dark:text-gray-100 sm:text-md md:text-xl">
						Front End Web Developer | Designer.
					</p> */}
				</div>
				<div className="flex flex-col gap-2 min-[400px]:flex-row self-start justify-center ">
					<Socials />
				</div>
			</div>
		</section>
	)
}
