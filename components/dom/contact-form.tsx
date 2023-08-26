'use client'
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
import axios from 'axios'

export const ContactForm = () => {
    const { formData } = useSnapshot(state)
    const toast = useToast()
    const animatedProps = useSpring({ opacity: 1, from: { opacity: 0 } })

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        updateFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.email,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        // CLEAR | UPDATE FORM FIELDS
        updateFormData({ name: '', email: '', message: '' })

        // try {
        //     // SEND FORM DATA TO NEXT API ROUTE
        //     await axios.post(
        //         'api/mail',
        //         {
        //             formData,
        //         },
        //         {
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //         }
        //     )
        //     // HANDLE SUCCESS
        //     toast({
        //         title: 'Message Sent',
        //         description: 'Your email has been sent successfully!',
        //         status: 'success',
        //         duration: 5000,
        //         isClosable: true,
        //     })

        //     // CLEAR | UPDATE FORM FIELDS
        //     updateFormData({ name: '', email: '', message: '' })
        // } catch (error) {
        //     // HANDLE ERROr
        //     toast({
        //         title: 'Error',
        //         description: `An error occurred while sending the email.`,
        //         status: 'error',
        //         duration: 5000,
        //         isClosable: true,
        //     })
        // }
    }

    return (
        <animated.form onSubmit={handleSubmit} style={animatedProps}>
            <FormControl isRequired>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Full Name'
                    variant='flushed'
                    focusBorderColor='primary.green'
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                    type='email'
                    id='email'
                    name='email'
                    variant='flushed'
                    mb={5}
                    placeholder='Email Address'
                    focusBorderColor='primary.green'
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel htmlFor='message'>Message</FormLabel>
                <Textarea
                    name='message'
                    id='message'
                    placeholder='Your message'
                    focusBorderColor='primary.green'
                    value={formData.message}
                    onChange={handleInputChange}
                />
                <FormHelperText></FormHelperText>
                <Button size='md' bg='primary.green' type='submit'>
                    Submit
                </Button>
            </FormControl>
        </animated.form>
    )
}
