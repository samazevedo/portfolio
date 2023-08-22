'use client'
import { Section } from '@/components/dom/section'
import { Paragraph } from '@/components/styles/styles'
import {
    Container,
    FormControl,
    FormLabel,
    Text,
    Input,
    Textarea,
    FormHelperText,
    Button,
} from '@chakra-ui/react'
import { state, updateFormData } from '@/store/store'
import { ContactForm } from '@/components/dom/contact-form'
import axios from 'axios'
import { useSnapshot } from 'valtio'

export default function Page() {
    const data = useSnapshot(state.formData)
    const handleSubmit = async (data: ContactFormData) => {
        try {
            await axios.post('/api/mail', state)
            updateFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('Error submitting form:', error)
            throw new Error('An error occurred while sending the email.')
        }
    }
    return (
        <Container pt={20}>
            <Section>
                <Text as='h2' fontSize={30} mb={4}>
                    Contact
                </Text>
                <Paragraph>
                    For any questions or future work, please send me an email or
                    use the form below to send me a message.
                </Paragraph>
                <ContactForm onSubmit={handleSubmit} />
            </Section>
        </Container>
    )
}
