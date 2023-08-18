'use client'
import { Button, Icon, Image } from '@chakra-ui/react'
import { Box, Container, Text } from '@chakra-ui/react'
import MyComponent from '@/components/canvas/blob'
import { Section } from '@/components/dom/section'
import { useEffect } from 'react'
import { state } from '@/store/store'
import { BioSection, BioYear, Paragraph } from '@/components/styles/styles'
import { Link } from '@chakra-ui/next-js'

export default function Home() {
    useEffect(() => {
        setTimeout(() => {
            state.isVisible = true
        }, 3000)
    }, [])
    return (
        <Container w='100%' display='grid' pt={10}>
            {/* <MyComponent /> */}
            <Section>
                <Box w='100%' mt={100} p={4}>
                    <Box
                        textAlign='center'
                        bg='primary.green'
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
            </Section>
            <Section delay={1000}>
                <Box w='100%' mb={50} p={4}>
                    <Text as='h3'>Work</Text>
                    <Paragraph>
                        Samuel Azevedo is a freelancer Web Developer based in
                        Sao Paulo Brazil, he has a passion for building web
                        applications. Self taught he is always looking forward
                        to learn new tools and technologies for the Web. When
                        not online, he loves to travel, explore new places and
                        food.
                    </Paragraph>
                    <Box
                        display='grid'
                        alignItems='center'
                        justifyItems='center'
                        mt={5}
                    >
                        <Link href='/portfolio'>
                            <Button size='md' bg='primary.green'>
                                Portfolio
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Section>
            <Section delay={1500}>
                <Box w='100%' mb={50} p={4}>
                    <Text as='h3'>Bio</Text>
                    <BioSection>
                        <BioYear>1990</BioYear> Born in Sao Paulo, Brazil.
                    </BioSection>
                    <BioSection>
                        <BioYear>2014 - 2022</BioYear> Worked in Aviation.
                    </BioSection>
                    <BioSection>
                        <BioYear>2023 - present </BioYear> Started his journey
                        as Web Developer.
                    </BioSection>
                </Box>
            </Section>
            <Section delay={2000}>
                <Box w='100%' mb={50} p={4}>
                    <Text as='h3' letterSpacing={2}>
                        I
                        <Icon
                            viewBox='0 0 24 24'
                            color='red.500'
                            strokeMiterlimit='2'
                            strokeLinejoin='round'
                        >
                            <path
                                fill='currentColor'
                                d='m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z'
                            />
                        </Icon>
                    </Text>
                    <Paragraph>
                        Technology, Art, Music, Photography, Soccer, Languages,
                        Travel, Food.
                    </Paragraph>
                </Box>
            </Section>
            <Section delay={2500}>
                <Box w='100%' mb={50} p={4}>
                    <Text as='h3'>Socials</Text>
                    <Paragraph>
                        Find me through my social media accounts.
                    </Paragraph>
                    <Text as='p'>
                        <Text as='span' fontWeight='bolder'>
                            <Link href='https://github.com/samazevedo'>
                                <Box
                                    display='grid'
                                    gridTemplateColumns='repeat(2, 1fr)'
                                    justifyItems='start'
                                    maxW='9rem'
                                >
                                    <Image
                                        src='/icons/github.svg'
                                        alt='github'
                                        borderRadius='full'
                                        boxSize='1.5rem'
                                        mb={5}
                                    />
                                    <Paragraph>@samazevedo</Paragraph>
                                </Box>
                            </Link>
                            <Link href='https://'>
                                <Box
                                    display='grid'
                                    gridTemplateColumns='repeat(2, 1fr)'
                                    justifyItems='start'
                                    maxW='9rem'
                                >
                                    <Image
                                        src='/icons/twitter.svg'
                                        alt='twitter'
                                        borderRadius='full'
                                        boxSize='1.5rem'
                                        mb={5}
                                    />
                                    <Paragraph>@samazevedo</Paragraph>
                                </Box>
                            </Link>
                            <Link href='https://'>
                                <Box
                                    display='grid'
                                    gridTemplateColumns='repeat(2, 1fr)'
                                    justifyItems='start'
                                    maxW='9rem'
                                >
                                    <Image
                                        src='/icons/linkedin.svg'
                                        alt='linkedin'
                                        borderRadius='full'
                                        boxSize='1.5rem'
                                        mb={5}
                                    />
                                    <Paragraph>@samazevedo</Paragraph>
                                </Box>
                            </Link>
                            <Link href=''>
                                <Box
                                    display='grid'
                                    gridTemplateColumns='repeat(2, 1fr)'
                                    justifyItems='start'
                                    maxW='9rem'
                                >
                                    <Image
                                        src='/icons/instagram.svg'
                                        alt='instagram'
                                        borderRadius='full'
                                        boxSize='1.5rem'
                                        mb={5}
                                    />
                                    <Paragraph>@samazevedo</Paragraph>
                                </Box>
                            </Link>
                            <ul></ul>
                        </Text>
                    </Text>
                </Box>
            </Section>
        </Container>
    )
}
