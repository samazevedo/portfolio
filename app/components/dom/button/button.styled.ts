import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 6rem;
  height: 2rem;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 0.5rem;
  padding: 0.3rem 0.7rem;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  & a {
    color: white;
  }
  &:hover {
    background-color: green;
    color: black;
    transform: translateY(-0.1rem);
  }
  &:active {
    transform: scale(0.95);
  }
`
