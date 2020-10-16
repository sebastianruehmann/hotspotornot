import React from 'react'
import styled from 'styled-components'
import { PuffLoader } from 'react-spinners'

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const LoadingIndicator = () => {
  return (
    <Wrapper>
      <PuffLoader />
    </Wrapper>
  )
}
