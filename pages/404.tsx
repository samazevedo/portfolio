import { Container, Text } from '@chakra-ui/react'

export default function Custom404() {
    return (
        <Container mt={70} textAlign='center'>
            <Text as='h2' fontSize={30} mb={4}>
                404
            </Text>
            <Text as='p' fontSize={20} mb={4}>
                Page Not Found
            </Text>
        </Container>
    )
}
