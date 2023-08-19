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
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type='text'
                        placeholder='Full Name'
                        variant='flushed'
                        focusBorderColor='primary.green'
                    />
                    <FormLabel>Email</FormLabel>
                    <Input
                        type='email'
                        variant='flushed'
                        mb={5}
                        placeholder='Email Address'
                        focusBorderColor='primary.green'
                    />
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        placeholder='Your message'
                        focusBorderColor='primary.green'
                    />
                    <FormHelperText></FormHelperText>
                    <Button size='md' bg='primary.green'>
                        Submit
                    </Button>
                </FormControl>
            </Section>
        </Container>
    )
}
