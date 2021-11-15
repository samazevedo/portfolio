import styled from 'styled-components'

export const ContactFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 3% 5%;
`

export const ContactFormInput = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 0 10px;
    background-color: rgba(255, 255, 255, 0.5);
`
export const ContactFormTextarea = styled.textarea`
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 0 10px;
    background-color: rgba(255, 255, 255, 0.5);
`
