import { ContactStyles } from './contact.styled'
import { ContactForm } from './contact-form'

export const Contact = () => {
  return (
    <div id='contact'>
      <h1> Contact</h1>
      <p>
        <a href='mailto:samuel.azevedo@live.com'>
          <b style={{ color: 'red' }}>Email </b>
        </a>
        me or use the form below to send me a message.
      </p>
      <p>You also can find me on my social media accounts.</p>
      <ContactForm />
    </div>
  )
}
