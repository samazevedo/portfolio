import { Container } from '../Container/Container.style'
import { ContactStyles } from './Contact.style'
import { ContactForm } from '../Contact-form/Contact-form.component'

export const Contact = () => {
    return (
        <Container id='contact'>
            <ContactStyles>
                <h1> Get in touch.</h1>
                <p>
                    <a href='mailto:samuel.azevedo@live.com'>Email me</a> or use
                    the form below to send me a message. You also can find me on
                    my social media accounts.
                </p>
                <ContactForm />
            </ContactStyles>
        </Container>
    )
}
