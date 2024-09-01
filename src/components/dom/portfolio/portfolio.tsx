import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
	CarouselItem,
} from "@components/ui/carousel"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@components/ui/card"

const ProjectsData = [
	{
		id: 1,
		title: "Next Blog",
		description: "A Next.js blog built with Next.js and Tailwind CSS",
		image: "/images/next-blog.png",
	},

	{
		id: 2,
		title: "Next Portfolio",
		description: "A Next.js portfolio built with Next.js and Tailwind CSS",
		image: "/images/next-portfolio.png",
	},

	{
		id: 3,
		title: "Next Portfolio",
		description: "A Next.js portfolio built with Next.js and Tailwind CSS",
		image: "/images/next-portfolio.png",
	},
]

export default function Portfolio() {
	return (
		<section className="min-h-[100vh] " id="portfolio">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2 mt-20">
						<h1>Explore My Work</h1>
						<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Check out some of my latest projects and see what I&apos;ve been working
							on.
						</p>
					</div>
				</div>
				<div className="max-w-xl mx-auto grid place-items-center ">
					<Carousel className="">
						<CarouselContent className="">
							{ProjectsData.map((project) => (
								<CarouselItem key={project.id} className="w-full md:w-1/2">
									<Card>
										<div className="relative w-full">
											{/* Image taking full width and top space */}
											<Image
												src={project.image}
												alt={project.title}
												width={100}
												height={100}
												className="w-full h-auto rounded-t-md object-cover"
												quality={100}
											/>
										</div>
										<CardContent className="p-4">
											<div>
												{/* Title */}
												<h3 className="text-lg font-bold mb-2">{project.title}</h3>
												{/* Description */}
												<p className="text-gray-500 dark:text-gray-400 text-sm">
													{project.description}
												</p>
												{/* Link */}
												<div className="flex justify-end">
													<Link href="#" className="text-blue-500 hover:text-blue-700">
														View Project
													</Link>
												</div>
											</div>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselNext className="w-10" />
						<CarouselPrevious className="w-10" />
					</Carousel>
				</div>
			</div>
		</section>
	)
}
