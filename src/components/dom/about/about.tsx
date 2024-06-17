import Link from "next/link"
import Image from "next/image"
export default function About() {
	return (
		<section
			className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
			id="about"
		>
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
							About Me
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Get to Know Me
						</h2>
						<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							I&apos;m a front-end web developer and designer who loves creating
							beautiful, responsive and interactive websites.
						</p>
					</div>
					<h2>Tools I use:</h2>

					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						<Image
							src="/html.png"
							alt="HTML"
							className="rounded-t-lg w-full aspect-[4/3] object-cover"
							width={1920}
							height={1080}
						/>
						<Image
							src="/css.png"
							alt="CSS"
							className="rounded-t-lg w-full aspect-[4/3] object-cover"
							width={1920}
							height={1080}
						/>
						<Image
							src="/js.png"
							alt="Javascript"
							className="rounded-t-lg w-full aspect-[4/3] object-cover"
							width={1920}
							height={1080}
						/>
						<Image
							src="/react.png"
							alt="React"
							className="rounded-t-lg w-full aspect-[4/3] object-cover"
							width={1920}
							height={1080}
						/>
						<Image
							src="/next.png"
							alt="Next"
							className="rounded-t-lg w-full aspect-[4/3] object-cover"
							width={1920}
							height={1080}
						/>
						<Image
							src="/tailwind.png"
							alt="Tailwind"
							className="rounded-t-lg w-full aspect-[4/3] object-cover"
							width={1920}
							height={1080}
						/>
						<Image
							src="/ts.png"
							alt="Typescript"
							className="rounded-t-lg w-full aspect-[4/3] object-cover"
							width={1920}
							height={1080}
						/>
						<Image
							src="/threejs.png"
							alt="Threejs"
							className="rounded-t-lg w-full aspect-[4/3] object-cover"
							width={1920}
							height={1080}
						/>
						<Image
							src="/webgl.png"
							alt="Webgl"
							className="rounded-t-lg w-full aspect-[4/3] object-cover"
							width={1920}
							height={1080}
						/>
					</div>

					{/* <Link
						href="#"
						className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
						prefetch={false}
					>
						Learn More
					</Link> */}
				</div>
			</div>
		</section>
	)
}
