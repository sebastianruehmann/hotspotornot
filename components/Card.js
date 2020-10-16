import React from 'react'
import styled from 'styled-components'
import {RISK_LEVELS} from '../constants';

const getColor = ({riskLevel}) => {
  switch (riskLevel) {
    case RISK_LEVELS.low:
      return '#57b160'
    case RISK_LEVELS.medium:
      return '#E2CB31'
    case RISK_LEVELS.high:
      return '#C34838'
  }
}

const Wrapper = styled.div`
  background: ${props => getColor(props)};
  border-radius: 10px;
  color: white;
  padding: 1rem;
`

function Card({riskLevel, children}) {
  return (
    <Wrapper riskLevel={riskLevel}>
      {children}
    </Wrapper>
  )
}

export default Card
