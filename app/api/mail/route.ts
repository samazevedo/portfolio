import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

export async function POST(req: NextRequest, res: NextResponse) {
    // provide a default value By using the nullish coalescing operator
    const sendGridApiKey = process.env.SENDGRID_API_KEY ?? ''
    sgMail.setApiKey(sendGridApiKey)
    if (req.method === 'POST') {
        const data = await res.body
        console.log(data)
    }

    // const msg = {
    //     to: 'samuel.azevedo@live.com',
    //     from: formData.email,
    //     subject: `New message from ${name}`,
    //     text: message,
    // }

    // const response = await sgMail.send(msg)
    // console.log(response)
}

export async function GET(req: NextRequest, res: NextResponse) {
    if (req.method === 'GET') {
        return NextResponse.json('Hello from API')
    }
}

// import { NextApiRequest, NextApiResponse } from 'next'
// import sgMail from '@sendgrid/mail'

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//     // provide a default value By using the nullish coalescing operator
//     const sendGridApiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY ?? ''

//     if (req.method === 'POST') {
//         sgMail.setApiKey(sendGridApiKey)

//         const { name, email, message } = req.body

//         const msg = {
//             to: 'samuel.azevedo@live.com',
//             from: email,
//             subject: `New message from ${name}`,
//             text: message,
//         }
//         console.log(msg)

//         try {
//             await sgMail.send(msg)
//             res.status(201).json({ message: 'Email send seccesfully' })
//         } catch (error) {
//             console.error('Error sending email', error)
//             res.status(422).json({ message: 'Error sending email' })
//         }
//     } else {
//         res.status(405).json({ message: 'METHOD NOT ALLOWED' })
//     }
// }
