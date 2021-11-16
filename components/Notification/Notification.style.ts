import styled from 'styled-components'

interface NotificationProps {
    status: string
}

export const NotificationWrapper = styled.div``
export const CssClass = styled.div<NotificationProps>`
    position: absolute;
    top: 5%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--black-color);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
    height: 3rem;
    width: 100%;
    max-width: 350px;
    border-radius: 5px;
    & h2 {
        font-size: 1rem;
        margin: 0;
    }
    & p {
        font-size: 0.8rem;
        margin: 0;
    }
    background-color: ${({ status }) =>
        status === 'success'
            ? '#CFFA41'
            : status === 'error'
            ? 'rgba(255, 46, 46, 0.9)'
            : 'rgba(255, 255, 255, 0.7)'};
    color: ${({ status }) =>
        status === 'success'
            ? '#000000'
            : status === 'error'
            ? '#ffffff'
            : '#000000'};
`
