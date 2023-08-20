import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body

        if (
            !name ||
            name.trim() === '' ||
            !email ||
            email.include('@') === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Please enter all fields' })
            return
        }
    }
}
