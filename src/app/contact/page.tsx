'use client'
import { Section } from '@/components/dom/section'
import { Paragraph } from '@/styles/styles'
import { Container, Text } from '@chakra-ui/react'
import { state, updateFormData } from '@/store/store'
import { ContactForm } from '@/components/dom/contact-form'
import axios from 'axios'
import { useSnapshot } from 'valtio'
import type { ContactFormData } from '@/types/global'

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
