import React, { useRef, ReactNode } from 'react'
import styled from 'styled-components'

interface domProps {
  children?: ReactNode
}
export default function Dom({ children }: domProps) {
  const ref = useRef(null!)

  return <StyledDOM ref={ref}>{children}</StyledDOM>
}

const StyledDOM = styled.div`
  width: 100%;
  height: 100%;
`
