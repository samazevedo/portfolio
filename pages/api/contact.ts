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

        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.imcvb.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

        let client
        try {
            client = await MongoClient.connect(connectionString)
        } catch (error) {
            res.status(500).json({
                message: 'Sorry! Cannot stablish connection .',
            })
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
