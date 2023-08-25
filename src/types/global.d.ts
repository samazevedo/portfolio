// define global inerfaces and types here

export interface ContactFormData {
    name: string
    email: string
    message: string
}

export interface GlobalProps {
    // PROPS
    ContactFormProps: {
        onSubmit: (data: ContactFormData) => void
    }
    LinkItemProps: {
        href: string
        children: React.ReactNode
    }
    SectionProps: {
        children: React.ReactNode
        delay?: number
    }
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>
    export default content
}
