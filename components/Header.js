import React from 'react'
import styled, { css } from 'styled-components'
import { RISK_LEVELS } from '../constants'

const backgroundStyles = ({ riskLevel }) => {
  let backgroundColor = '#f5f5f7'

  switch (riskLevel) {
    case RISK_LEVELS.low:
      backgroundColor = '#57b160'
      break
    case RISK_LEVELS.medium:
      backgroundColor = '#E2CB31'
      break
    case RISK_LEVELS.high:
      backgroundColor = '#C34838'
      break
  }
  return css`
    background: ${backgroundColor};
  `
}

const Wrapper = styled.div`
  color: ${(props) => (props.inversed ? 'white' : 'inherit')};
  ${backgroundStyles};
`

function Header({ riskLevel, inversed, children }) {
  return (
    <Wrapper inversed={inversed} riskLevel={riskLevel}>
      {children}
    </Wrapper>
  )
}

export default Header
