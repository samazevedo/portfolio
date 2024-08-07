import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@components/ui/card"

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
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
					<Card>
						<CardContent>
							<Image
								src="/images/next-blog.png"
								alt="Project 1"
								className="rounded-t-lg w-full aspect-[4/3] object-cover"
								width={200}
								height={300}
								objectFit="fill"
							/>
							<div className="p-4 space-y-2">
								<h3 className="text-xl font-bold">Project 1</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Next.js Blogging Web App, created with Next.js and deployed with
									Vercel.
								</p>
								<div className="flex justify-end">
									<Link
										href="#"
										className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
										prefetch={false}
									>
										View Project
									</Link>
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent>
							<Image
								src="/next.svg"
								alt="Project 2"
								className="rounded-t-lg w-full aspect-[4/3] object-cover"
								width={1920}
								height={1080}
							/>
							<div className="p-4 space-y-2">
								<h3 className="text-xl font-bold">Project 2</h3>
								<p className="text-gray-500 dark:text-gray-400">
									A brief description of the second project.
								</p>
								<div className="flex justify-end">
									<Link
										href="#"
										className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
										prefetch={false}
									>
										View Project
									</Link>
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent>
							<Image
								src="/next.svg"
								alt="Project 3"
								className="rounded-t-lg w-full aspect-[4/3] object-cover"
								width={1920}
								height={1080}
							/>
							<div className="p-4 space-y-2">
								<h3 className="text-xl font-bold">Project 3</h3>
								<p className="text-gray-500 dark:text-gray-400">
									A brief description of the third project.
								</p>
								<div className="flex justify-end">
									<Link
										href="#"
										className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
										prefetch={false}
									>
										View Project
									</Link>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}
