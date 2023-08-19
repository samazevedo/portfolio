'use client'
import { Section } from '@/components/dom/section'
import { Paragraph } from '@/components/styles/styles'
import { Container, Text } from '@chakra-ui/react'

export default function Page() {
    return (
        <Container pt={20}>
            <Section>
                <Text as='h2' fontSize={30} mb={4}>
                    Portfolio
                </Text>
                <Paragraph>
                    Here is some of my latest works and projects.
                </Paragraph>
            </Section>
        </Container>
    )
}
