import Link from "next/link"
import Image from "next/image"
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
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="text-center space-y-4 max-w-2xl px-4 md:px-6">
					<h1 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-5xl md:text-6xl">
						Sam Azevedo
					</h1>
					<p className="text-lg text-gray-300 md:text-xl">
						Front End Web Developer UX | UI Designer.
					</p>
					<div className="flex flex-col gap-2 min-[400px]:flex-row justify-center ">
						{/* <Link
							href="#portfolio"
							className="inline-flex h-10  justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
							prefetch={false}
						>
							View Projects
						</Link>
						<Link
							href="#contact"
							className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-50/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
							prefetch={false}
						>
							Contact Me
						</Link> */}
					</div>
				</div>
			</div>
		</section>
	)
}
