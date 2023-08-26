'use client'
import { Section } from '@/components/dom/section'
import { Paragraph } from '@/styles/styles'
import { Container, Text } from '@chakra-ui/react'
import { ContactForm } from '@/components/dom/contact-form'

export default function Page() {
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
                <ContactForm />
            </Section>
        </Container>
    )
}
