import {
    ContactFormWrapper,
    StyledForm,
    ContactFormInput,
    ContactFormTextarea,
} from './Contact-form.style'
import { Button } from '../Button/Button.component'
import { useEffect, useState } from 'react'
import { Notification } from '../Notification/Notification.component'

const sendContactData = async (contactDetails) => {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactDetails),
    })
    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
    }
}

export const ContactForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')
    // success || error || pending
    const [requestStatus, setRequestStatus] = useState('')
    const [requestError, setRequestError] = useState('')
    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus('')
                setRequestError('')
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [requestStatus])

    const sendMessageHandler = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()

        // add client side validation
        setRequestStatus('pending')
        try {
            await sendContactData({
                name: enteredName,
                email: enteredEmail,
                message: enteredMessage,
            })
            setRequestStatus('success')
            setEnteredName('')
            setEnteredEmail('')
            setEnteredMessage('')
        } catch (error) {
            setRequestStatus('error')
            setRequestError(error.message)
        }
    }

    let notification = null
    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Please wait while we send your message.',
        }
    }
    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Your message has been sent.',
        }
    }
    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Something went wrong!',
            message: requestError,
        }
    }

    return (
        <ContactFormWrapper>
            <StyledForm onSubmit={sendMessageHandler} id='contact-form'>
                <ContactFormInput
                    type='text'
                    placeholder='Name'
                    required
                    value={enteredName}
                    onChange={(event) => setEnteredName(event.target.value)}
                />
                <ContactFormInput
                    type='email'
                    placeholder='Email'
                    required
                    value={enteredEmail}
                    onChange={(event) => setEnteredEmail(event.target.value)}
                />
                <ContactFormTextarea
                    placeholder='Message'
                    rows={10}
                    required
                    value={enteredMessage}
                    onChange={(event) => setEnteredMessage(event.target.value)}
                />
                <Button type='submit' form='contact-form'>
                    Send Message
                </Button>
            </StyledForm>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
        </ContactFormWrapper>
    )
}
