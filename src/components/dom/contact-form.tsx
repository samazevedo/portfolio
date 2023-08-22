import { state, updateFormData } from '@/store/store'
import { useSpring, animated } from '@react-spring/web'
import { useSnapshot } from 'valtio'
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    FormHelperText,
    Button,
    useToast,
} from '@chakra-ui/react'
import type { GlobalProps } from '@/types/global.d.ts'

export const ContactForm = ({ onSubmit }: GlobalProps['ContactFormProps']) => {
    const formData = useSnapshot(state.formData)
    const toast = useToast()
    const animatedProps = useSpring({ opacity: 1, from: { opacity: 0 } })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        updateFormData({ [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await onSubmit(formData)
            toast({
                title: 'Email Sent',
                description: 'Your email has been sent successfully!',
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
            updateFormData({ name: '', email: '', message: '' })
        } catch (error) {
            toast({
                title: 'Error',
                description: 'An error occurred while sending the email.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    }

    return (
        <animated.form onSubmit={handleSubmit} style={animatedProps}>
            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    type='text'
                    name='name'
                    placeholder='Full Name'
                    variant='flushed'
                    focusBorderColor='primary.green'
                    value={formData.name}
                    onChange={handleChange}
                />
                <FormLabel>Email</FormLabel>
                <Input
                    type='email'
                    name='email'
                    variant='flushed'
                    mb={5}
                    placeholder='Email Address'
                    focusBorderColor='primary.green'
                    value={formData.email}
                    onChange={(e) => (state.formData.email = e.target.value)}
                />
                <FormLabel>Message</FormLabel>
                <Textarea
                    name='message'
                    placeholder='Your message'
                    focusBorderColor='primary.green'
                    value={formData.message}
                    onChange={(e) => (state.formData.message = e.target.value)}
                />
                <FormHelperText></FormHelperText>
                <Button size='md' bg='primary.green' type='submit'>
                    Submit
                </Button>
            </FormControl>
        </animated.form>
    )
}
