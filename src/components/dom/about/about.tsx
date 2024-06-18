import Link from "next/link"
import Image from "next/image"

const tools = [
	{ name: "HTML", icon: "/icons/tech/html5.svg" },
	{ name: "CSS", icon: "/icons/tech/css3.svg" },
	{ name: "Sass", icon: "/icons/tech/sass.svg" },
	{ name: "Bootstrap", icon: "/icons/tech/bootstrap.svg" },
	{ name: "Styled Components", icon: "/icons/tech/styledcomponents.svg" },
	{ name: "Tailwind CSS", icon: "/icons/tech/tailwindcss.svg" },
	{ name: "JavaScript", icon: "/icons/tech/javascript.svg" },
	{ name: "TypeScript", icon: "/icons/tech/typescript.svg" },
	{ name: "React.js", icon: "/icons/tech/react.svg" },
	{ name: "Next.js", icon: "/icons/tech/nextdotjs.svg" },
	{ name: "Three.js", icon: "/icons/tech/threedotjs.svg" },
	{ name: "webGL", icon: "/icons/tech/webgl.svg" },
	{ name: "Node.js", icon: "/icons/tech/nodedotjs.svg" },
	{ name: "MongoDB", icon: "/icons/tech/mongodb.svg" },
	{ name: "Chakra UI", icon: "/icons/tech/chakraui.svg" },
	{ name: "Corel Draw", icon: "/icons/tech/coreldraw.svg" },
]
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

					<div className="grid grid-cols-3 md:grid-cols-7 gap-4">
						{tools.map((tool) => (
							<Image
								key={tool.name}
								src={tool.icon}
								alt={tool.name}
								className="w-full max-w-20 aspect-[3/3]   object-cover"
								width={5}
								height={5}
							/>
						))}
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
