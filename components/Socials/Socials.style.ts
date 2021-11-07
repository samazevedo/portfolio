import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 5rem;
    right: 3rem;
    color: #fff;
    box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.5),
        0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.5);
    border-radius: 50%;
`
export const SocialItem = styled.div`
    font-size: 2rem;
    font-weight: 900;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #4b4b4b;
    transition: transform 0.3s;
    &:hover {
        transform: rotate(90deg);
    }
`
