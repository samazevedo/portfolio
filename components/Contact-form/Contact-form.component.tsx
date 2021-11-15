import {
    ContactFormWrapper,
    StyledForm,
    ContactFormInput,
    ContactFormTextarea,
} from './Contact-form.style'
import { Button } from '../Button/Button.component'
import { useState } from 'react'

export const ContactForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')

    function sendMessageHandler(event) {
        event.preventDefault()

        // add client side validation

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: enteredName,
                email: enteredEmail,
                message: enteredMessage,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        setEnteredEmail('')
        setEnteredName('')
        setEnteredMessage('')
        alert('Message sent!')
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
        </ContactFormWrapper>
    )
}
