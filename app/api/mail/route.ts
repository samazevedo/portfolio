import { NextRequest, NextResponse } from 'next/server'
import { ContactFormData } from '@/types/global'
import sgMail from '@sendgrid/mail'

export async function GET() {
    return NextResponse.json({
        message: 'Mail API running!!!',
    })
}

export async function POST(req: NextRequest, res: NextResponse) {
    // const sendGridApiKey = process.env.SENDGRID_API_KEY ?? ''
    // sgMail.setApiKey(sendGridApiKey)

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

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

        const msg = {
            to: 'sam@azevedochang.com',
            from: `${email}`,
            subject: 'New Form Submission',
            text: `${message}`,
        }
        await sgMail.send(msg)

        return NextResponse.json({
            status: 200,
            message: 'Form submitted successfully',
        })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({
            error: ' An error occurred while sending the email',
        })
    }
}
