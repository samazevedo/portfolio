import { Container, Text } from '@chakra-ui/react'

export default function Custom500() {
    return (
        <Container mt={70} textAlign='center'>
            <Text as='h2' fontSize={30} mb={4}>
                500
            </Text>
            <Text as='p' fontSize={20} mb={4}>
                Server-side Error Occurred
            </Text>
        </Container>
    )
}
