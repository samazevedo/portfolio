import styled from 'styled-components'

interface Props {
  message: string
  title: string
  status: string
}

export const Notification: React.FC<Props> = ({ title, message, status }) => {

  return (
    <CssClass status={status}>
      <p>{title}</p>
      <p>{message}</p>
    </CssClass>
  )
}


interface NotificationProps {
  status: string
}


export const CssClass = styled.div<NotificationProps>`
  position: absolute;
  top: 5%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
	font-family: sans;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--black-color);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  height: 5rem;
  width: 100%;
  max-width: 40rem;
  border-radius: 0.2rem;
  z-index: 999;
	overflow: hidden;
	text-align:center;
  & p {
    font-size:1.5rem;
    margin: 0;
		font-family: sans;
  }
  background-color: ${({ status }) =>
    status === 'success'
      ? '#CFFA41'
      : status === 'error'
      ? 'rgba(255, 46, 46, 1)'
      : 'rgba(255, 255, 255, 1)'};
  color: ${({ status }) =>
    status === 'success'
      ? '#000000'
      : status === 'error'
      ? '#ffffff'
      : '#000000'};
`