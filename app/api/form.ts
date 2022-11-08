
export default function handler(req:any, res:any ){
	const body = req.body

	// guard clause check name email message
	if(!body.name || !body.email || body.message) {

		// send http bad request error code
		return res.status(400).json({ data: 'Form is imcomplete'})

	}

	res.status(200).json({data: `${(body.name)} ${(body.email)} ${(body.message)}`})
}