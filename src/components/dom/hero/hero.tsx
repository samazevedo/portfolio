import Link from "next/link"
import Image from "next/image"
import Socials from "../socials/socials"
export default function Hero() {
	return (
		<section className="relative w-full h-[100vh] md:h-[100vh] lg:h-[100vh] overflow-hidden">
			{/* <Image
				src="/placeholder.svg"
				width={1920}
				height={1080}
				alt="Hero"
				className="absolute inset-0 w-full h-full object-cover object-center"
			/> */}
			<div className="absolute inset-0  grid grid-rows-[1.5fr_1.0fr_0.5fr] justify-center">
				<div className="text-center space-y-4 max-w-2xl px-4 md:px-6 self-end">
					<h1 className="text-5xl font-bold tracking-tighter   sm:text-5xl md:text-6xl text-black dark:text-lime-400">
						Sam Azevedo
					</h1>
				</div>
				<div className="text-center space-y-4 max-w-2xl px-4 md:px-6 self-start">
					<p className="text-lg text-gray-700 dark:text-gray-100 sm:text-md md:text-xl">
						Front End Web Developer | Designer.
					</p>
				</div>
				<div className="flex flex-col gap-2 min-[400px]:flex-row self-start justify-center ">
					<Socials />
				</div>
			</div>
		</section>
	)
}
