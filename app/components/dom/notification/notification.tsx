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
  height: 7rem;
  width: 100%;
  max-width: 50rem;
  border-radius: 0.2rem;
  z-index: 999;
	overflow: hidden;
	text-align:center;
  & p {
    font-size:2rem;
    margin: 0;
		padding: 0;
		font-family: sans;
		color:#000000;
  }
  background-color: ${({ status }) =>
    status === 'success'
      ? 'rgba(195, 254, 114, 1)'
      : status === 'error'
      ? 'rgba(255, 46, 46, 1)'
      : 'rgba(255, 255, 255, 1)'};
  color: ${({ status }) =>
    status === 'success'
      ? 'black'
      : status === 'error'
      ? '#ffffff'
      : '#000000'};!important
`