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
	// bg-blue-100 dark:bg-blue-900
]
export default function About() {
	return (
		<section className="min-h-[100vh]" id="about">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2 mt-20">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Who am I?
						</h2>
						<p className="max-w-[900px] text-gray-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Hello! My name is <span className="text-lime-600">Samuel Azevedo</span>,
							and I am a passionate{" "}
							<span className="text-lime-600">Front-end Developer</span> and{" "}
							<span className="text-lime-600">Designer</span>. I specialize in creating
							visually stunning, responsive, and interactive web applications that
							provide seamless user experiences.
						</p>
						<p className="max-w-[900px] text-gray-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							With a keen eye for detail and a dedication to the craft, I bring ideas
							to life through code and design. Whether it's building from scratch or
							enhancing existing projects, I thrive on delivering high-quality results.
						</p>
						<p className="max-w-[900px] text-gray-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Currently, I am working as a freelancer, collaborating with clients to
							create web applications that not only look great but also function
							flawlessly. Let's build something amazing together!
						</p>
						<div></div>
						{/* </div>
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
						))} */}
					</div>

					{/* <Link
						href="#"
						className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
						prefetch={false}
					>
						Learn More
					</Link> */}
					<div className="min-h-[50vh]"></div>
					<div></div>
				</div>
			</div>
		</section>
	)
}
