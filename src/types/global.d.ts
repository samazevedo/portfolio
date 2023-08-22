// define global inerfaces and types here

interface ContactFormData {
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
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>
    export default content
}
