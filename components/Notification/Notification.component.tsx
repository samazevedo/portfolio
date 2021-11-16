import { CssClass } from './Notification.style'

interface Props {
    message: string
    title: string
    status: string
}

export const Notification: React.FC<Props> = ({ title, message, status }) => {
    console.log(status)

    return (
        <CssClass status={status}>
            <h2>{title}</h2>
            <p>{message}</p>
        </CssClass>
    )
}

export default Notification
