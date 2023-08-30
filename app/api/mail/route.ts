import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
import { ContactFormData } from '@/types/global'
export const config = { runtime: 'experiment-edge' }

export async function GET() {
    return NextResponse.json({
        message: 'Mail API running!!!',
    })
}

export async function POST(req: NextRequest, res: NextResponse) {
    const sendGridApiKey = process.env.SENDGRID_API_KEY ?? ''
    sgMail.setApiKey(sendGridApiKey)

    // read the request
    try {
        const requestBody = await req.text()

        const { name, message, email } = JSON.parse(
            requestBody
        ) as ContactFormData
        // const formData = await req.formData()
        // let name = formData.get('name')
        // let email = formData.get('email')
        // let message = formData.get('message')

        const messageData = `
          Name: ${name}\r\n
          Email: ${email}\r\n
          Message: ${message}
        `

        const msg = {
            to: 'samuel.azevedo@live.com',
            from: 'samuel.azevedo@live.com',
            subject: `New web form message`,
            text: messageData,
        }
        await sgMail
            .send(msg)
            .then(() => {
                console.log('Form sent succesfully!')
            })
            .catch((error) => {
                console.error(error)
            })

        new Response('Form submitted successfully')
    } catch (error) {
        return new Response('fail')
    }
    return new Response('success')
}
