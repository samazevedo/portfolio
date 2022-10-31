import { ContactStyles } from './contact.styled'
import { ContactForm } from './contact-form'

export const Contact = () => {
  return (
    <div id='contact'>
      <ContactStyles>
        <h1> Get in touch.</h1>
        <p>
          <a href='mailto:samuel.azevedo@live.com'>Email me</a> or use the form
          below to send me a message.
        </p>
        <p>You also can find me on my social media accounts.</p>
        <ContactForm />
      </ContactStyles>
    </div>
  )
}
