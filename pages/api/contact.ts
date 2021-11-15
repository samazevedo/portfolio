import { NextApiRequest, NextApiResponse } from 'next'

export default function Contact(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body

        if (
            !name ||
            name.trim() === '' ||
            !email ||
            email.includes('@') === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Please enter all fields' })
            return
        }
        const newMessage = {
            name,
            email,
            message,
        }
        console.log(newMessage)

        res.status(201).json({ message: 'Message sent Successfully!' })
    }
}
