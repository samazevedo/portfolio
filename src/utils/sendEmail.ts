type FormData = {
	name: string
	email: string
	message: string
}
export const sendEmail = (data: FormData) => {
	console.log(data)
}
