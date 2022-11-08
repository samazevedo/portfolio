import styled from 'styled-components'
import { ContactForm } from './contact-form'
import { Socials } from '../socials/socials'

export default function Contact() {
  return (
    <ContactStyled id='contact'>
      <h1> Contact</h1>
      <p>
				If you have any questions or wish to work with me, please send me an <a href='mailto:samuel.azevedo@live.com'><span>Email </span></a>
         or use the form below to send me a message.<br/>
				 You also can find me on my social media accounts.
      </p>
			<div className='contact-social'>
			<Socials/>
			</div>
      <ContactForm />
    </ContactStyled>
  )
}

const ContactStyled = styled.section`
	width: 100%;
	height:100%;
	padding:0;
	display:grid;
	& .contact-social {
		width:100%;
		display: grid;
		align-items: start;
		justify-items: center;
	}
`