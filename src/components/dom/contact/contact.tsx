import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Textarea } from "@components/ui/textarea"
export default function Contact() {
	return (
		<section className="min-h-[90vh] " id="contact">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2 mt-20">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Get in Touch
						</h2>
						<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							I&apos;d love to hear from you! Feel free to reach out with any questions
							or inquiries.
						</p>
					</div>
					<form className="mx-auto w-full max-w-sm space-y-2 pt-20">
						<Input type="text" placeholder="Name" className="max-w-lg flex-1 " />
						<Input type="email" placeholder="Email" className="max-w-lg flex-1" />
						<Textarea placeholder="Message" className="max-w-lg flex-1" />
						<Button type="submit">Submit</Button>
					</form>
				</div>
			</div>
		</section>
	)
}
