// define global inerfaces and types here

interface ContactFormData {
    name: string
    email: string
    message: string
}

interface GlobalProps {
    // define anh other global props interfaces here
    ContactFormProps: {
        onSubmit: (data: ContactFormData) => void
    }
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>
    export default content
}
