import React from 'react'
import styled from 'styled-components'
import {RISK_LEVELS} from '../constants';
import {Section} from './Layout'

const getColor = ({riskLevel}) => {
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
  background: ${props => getColor(props)};
  color: white;
  padding: 1rem;
`

function Header({riskLevel, children}) {
  return (
    <Wrapper riskLevel={riskLevel}>
      <Section wrapped>
        {children}
      </Section>
    </Wrapper>
  )
}

export default Header
