import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Textarea } from '@components/ui/textarea';
import { sendEmail } from '@utils/sendEmail';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
	name: string;
	email: string;
	message: string;
}

export default function Contact() {
	const { register, handleSubmit } = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		sendEmail(data);
		//clear form
	};

	return (
		<section className="min-h-[90vh] " id="contact">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2 mt-20">
						<h1>Get in Touch</h1>
						<p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							I&apos;d love to hear from you! Feel free to reach out with any questions or inquiries.
						</p>
					</div>
					<form className="mx-auto w-full max-w-sm space-y-2 pt-20" onSubmit={handleSubmit(onSubmit)}>
						<Input type="text" placeholder="Name" className="max-w-lg flex-1 " {...register('name', { required: true })} />
						<Input type="email" placeholder="Email" className="max-w-lg flex-1" {...register('email', { required: true })} />
						<Textarea placeholder="Message" className="max-w-lg flex-1" {...register('message', { required: true })} />
						<Button type="submit">Submit</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
