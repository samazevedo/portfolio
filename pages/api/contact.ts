import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

export default async function Contact(
    req: NextApiRequest,
    res: NextApiResponse
) {
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
            _id:
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15),
        }
        // console.log(newMessage)

        let client
        try {
            client = await MongoClient.connect(
                'mongodb+srv://sam-azev00:S7WBrUEYcoGIjkUb@cluster0.imcvb.mongodb.net/samWebsite?retryWrites=true&w=majority'
            )
        } catch (error) {
            res.status(500).json({ message: 'Cannot connect to database.' })
            return
        }
        // insert data into the database
        const db = client.db('samWebsite')
        try {
            const result = await db.collection('messages').insertOne(newMessage)
            newMessage._id = result.insertedId
        } catch (error) {
            client.close()
            res.status(500).json({ message: 'Failed to insert message.' })
        }
        client.close()

        res.status(201).json({ message: 'Message sent Successfully!' })
    }
}
