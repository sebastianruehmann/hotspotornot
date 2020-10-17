import React from 'react'
import styled from 'styled-components'
import { RISK_LEVELS } from '../constants'
import { Section } from './Layout'

const Wrapper = styled(Section)`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

function Footer({ children }) {
  return (
    <Wrapper as="footer" wrapped>
      {children}
    </Wrapper>
  )
}

export default Footer
