import React from 'react'
import styled from 'styled-components'
import { RISK_LEVELS } from '../constants'

const getColor = ({ riskLevel }) => {
  switch (riskLevel) {
    case RISK_LEVELS.low:
      return '#57b160'
    case RISK_LEVELS.medium:
      return '#E2CB31'
    case RISK_LEVELS.high:
      return '#C34838'
  }
  return '#f5f5f7'
}

const Wrapper = styled.div`
  background: ${(props) => getColor(props)};
  color: ${(props) => (props.inversed ? 'white' : 'inherit')};
`

function Header({ riskLevel, inversed, children }) {
  return (
    <Wrapper inversed={inversed} riskLevel={riskLevel}>
      {children}
    </Wrapper>
  )
}

export default Header
