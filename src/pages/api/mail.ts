import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
import { ContactFormData } from '@/types/global'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // provide a default value By using the nullish coalescing operator
    const sendGridApiKey = process.env.SENDGRID_API_KEY ?? ''

    if (req.method === 'POST') {
        sgMail.setApiKey(sendGridApiKey)

        const formData: ContactFormData = req.body
        console.log(formData)

        const msg = {
            to: 'samuel.azevedo@live.com',
            from: formData.email,
            subject: `New message from ${formData.name}`,
            text: formData.message,
        }
        console.log(msg)

        try {
            await sgMail.send(msg)
            res.status(200).json({ message: 'Email send seccesfully' })
        } catch (error) {
            console.error('Error sending email', error)
            res.status(500).json({ message: 'Error sending email' })
        }
    } else {
        res.status(405).json({ message: 'METHOD NOT ALLOWED' })
    }
}
