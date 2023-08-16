'use client'

import { Box, Container, Text } from '@chakra-ui/react'

export default function Home() {
    return (
        <Container w='100%' display='grid'>
            <Box w='100%' mt={100} p={4}>
                <Box
                    textAlign='center'
                    bg='primary.gray'
                    p={3}
                    borderRadius='lg'
                >
                    <Text as='h2'>
                        Hello, I&apos;m a Web Developer based in Sao Paulo,
                        Brazil.
                    </Text>
                </Box>
            </Box>
        </Container>
    )
}
