import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
	CarouselItem,
} from "@components/ui/carousel"
import Link from "next/link"
import Image from "next/image"
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@components/ui/card"
import { Badge } from "@components/ui/badge"

const ProjectsData = [
	{
		id: 1,
		title: "Next Blog",
		description: "A Next.js blog built with Next.js and Tailwind CSS",
		image: "/images/next-blog.png",
		stack: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
		link: "https://next-blog-sam-azevedo.vercel.app/",
	},

	{
		id: 2,
		title: "Next Portfolio",
		description: "A Next.js portfolio built with Next.js and Tailwind CSS",
		image: "/images/next-portfolio.png",
		stack: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
		link: "https://next-portfolio-sam-azevedo.vercel.app/",
	},

	{
		id: 3,
		title: "Next Portfolio",
		description: "A Next.js portfolio built with Next.js and Tailwind CSS",
		image: "/images/next-portfolio.png",
		stack: ["Next.js", "Styled Components", "Node.js", "MongoDB"],
		link: "https://next-portfolio-sam-azevedo.vercel.app/",
	},
	{
		id: 4,
		title: "Next Portfolio",
		description: "A Next.js portfolio built with Next.js and Tailwind CSS",
		image: "/images/next-portfolio.png",
		stack: ["Next.js", "Styled Components", "Node.js", "MongoDB"],
		link: "https://next-portfolio-sam-azevedo.vercel.app/",
	},
	{
		id: 5,
		title: "Next Portfolio",
		description: "A Next.js portfolio built with Next.js and Tailwind CSS",
		image: "/images/next-portfolio.png",
		stack: ["Next.js", "Styled Components", "Node.js", "MongoDB"],
		link: "https://next-portfolio-sam-azevedo.vercel.app/",
	},
]

export default function Portfolio() {
	return (
		<section className="min-h-[100vh] " id="portfolio">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2 my-20">
						<h1>Explore My Work</h1>
						<p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
							Check out some of my latest projects and see what I&apos;ve been working
							on.
						</p>
					</div>
				</div>
				<div className="w-full grid place-items-center ">
					<Carousel className="w-full max-w-xs  md:max-w-lg lg:max-w-3xl">
						<CarouselContent>
							{ProjectsData.map((project) => (
								<CarouselItem
									key={project.id}
									className="sm:basis-full md:basis-1/2 lg:basis-1/3"
								>
									<Card className=" h-full">
										<Image
											src={project.image}
											alt={project.title}
											width={600}
											height={300}
											className="rounded-t-lg object-cover w-full h-48"
											style={{ aspectRatio: "600/300", objectFit: "cover" }}
										/>

										<CardContent className="p-6 space-y-4">
											<div>
												<CardTitle className="text-muted-bold">{project.title}</CardTitle>
												<CardDescription className="text-muted-foreground">
													{project.description}
												</CardDescription>
												<div className="space-y-2">
													<div className="flex flex-wrap gap-2">
														{project.stack?.map((stack) => (
															<Badge variant="outline" key={stack}>
																{stack}
															</Badge>
														))}
													</div>
													<div className="flex items-center gap-4">
														<Link
															href={project.link}
															className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
															prefetch={false}
														>
															<GithubIcon />
														</Link>
														<Link
															href="#"
															className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
															prefetch={false}
														>
															<GlobeIcon className="w-5 h-5" />
															Live Site
														</Link>
													</div>
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

function GithubIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
			<path d="M9 18c-4.51 2-5-2-7-2" />
		</svg>
	)
}

function GlobeIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
			<path d="M2 12h20" />
		</svg>
	)
}
