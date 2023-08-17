'use client'
import { Image } from '@chakra-ui/react'
import { Box, Container, Text } from '@chakra-ui/react'
import MyComponent from '@/components/canvas/blob'

export default function Home() {
    return (
        <Container w='100%' display='grid' pt={10}>
            <MyComponent />
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
                <Box
                    display='grid'
                    gridTemplateColumns={{ base: '1', md: 'repeat(2,1fr)' }}
                    alignItems='center'
                    justifyItems='center'
                >
                    <Box
                        mt={5}
                        as='div'
                        justifySelf={{ base: 'center', md: 'start' }}
                    >
                        <Text as='h1' fontSize='2rem'>
                            Sam Azevedo
                        </Text>
                        <p>Web Developer | Designer</p>
                    </Box>
                    <Box
                        mt={3}
                        as='div'
                        justifySelf={{ base: 'center', md: 'end' }}
                    >
                        <Image
                            borderColor='primary.blue'
                            borderWidth={2}
                            borderStyle='solid'
                            boxSize={{ base: '7rem', md: '8rem' }}
                            display='inline-block'
                            borderRadius='50%'
                            src='/assets/images/profile.jpg'
                            alt='profile picture'
                            objectFit='cover'
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
