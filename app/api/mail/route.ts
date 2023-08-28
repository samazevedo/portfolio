import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
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
        const formData = await req.formData()

        let name = formData.get('name')
        let email = formData.get('email')
        let message = formData.get('message')

        const msg = {
            to: 'samuel.azevedo@live.com',
            from: email,
            subject: `New message from ${name}`,
            text: message,
        }

        await sgMail.send(msg)
    } catch (error) {
        return new Response('fail')
    }
    return new Response('success')
}
