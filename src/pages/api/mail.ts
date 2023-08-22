import { NextApiRequest, NextApiResponse } from 'next'
import { state } from '@/store/store'
import sgMail from '@sendgrid/mail'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({ status: 'ok' })
    if (req.method === 'POST') {
        // sgMail.setApiKey(process.env.SENDGRID_API_KEY)

        const msg = {
            to: 'samuel.azevedo@live.com',
            from: state.formData.email,
            subject: 'New Contact Form Submission',
            text: state.formData.message,
        }
        try {
            await sgMail.send(msg)
            res.status(200).json({ message: 'Email send seccesfully' })
        } catch (error) {
            console.error('Error sending email', error)
            res.status(500).json({ message: 'Error sending email' })
        }

        console.log(msg)
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}
