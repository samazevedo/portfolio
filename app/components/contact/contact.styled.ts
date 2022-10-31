import styled from 'styled-components'

export const ContactStyles = styled.div`
  min-height: 100vh;
  padding: 5%;
  font-weight: 500;
  & h1 {
    font-size: 2rem;
    margin-top: 1rem;
  }
  a {
    font-weight: bolder;
  }
  & p {
    padding: 0;
    margin: 0;
    margin-left: 0.5rem;
  }
`
export const Container = styled.div`
  display: grid;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 80rem;
  max-height: 80vh;
  margin: auto;
`

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
