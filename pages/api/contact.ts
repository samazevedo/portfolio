import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req:NextApiRequest, res:NextApiResponse ){
	
	// check if the request is valid => if POST
	if(req.method === 'POST') {

		// extract data from request
		const {email, name, message} = req.body

		// validate the data
		if(
			!email || 
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {

			// if the data is not valid send 400 response
			res.status(442).json({ message: 'Invalid input.'})
			return 
		}

		// store body in a database
		const newMessage = {
			email,
			name,
			message,
		}

		// send a 201 response
		res.status(201).json({
			message: 'Message sent succesfully!',
			Message: newMessage
		})
	}
}