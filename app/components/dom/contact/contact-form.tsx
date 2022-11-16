import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Notification } from '../notification/notification'

const sendContactData = async (contactDetails: any) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
			'Accept': 'application/json, text/plain, */*',
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
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
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
				name,
        email,
				message,
      })
      setRequestStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error: any) {
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
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <ContactFormInput
          type='email'
          placeholder='Email'
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <ContactFormTextarea
          placeholder='Message'
          rows={10}
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type='submit' form='contact-form' className='contact-btn'>
          Submit
        </button>
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


const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
	& .contact-btn {
		max-width: 15rem;
		padding: 1rem 0.5rem;
	}
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 3% 5%;
`

const ContactFormInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.3);
`
const ContactFormTextarea = styled.textarea`
  width: 100%;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.3);
`
