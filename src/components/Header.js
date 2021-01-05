import React from 'react'
import styled, { css } from 'styled-components'
import { RISK_LEVELS } from '../constants'

import { CoronaIcon as OriginalCoronaIcon } from '../icons'
import Link from 'next/link'
import { Section } from './Section'

const CoronaIcon = styled(OriginalCoronaIcon)`
  height: auto;
  margin-bottom: 40px;
  width: 125px;
`

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
      backgroundColor = '#c33838'
      break
    case RISK_LEVELS.veryHigh:
      backgroundColor = '#411313'
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

export const Header = ({ riskLevel, inversed, children }) => {
  return (
    <Wrapper inversed={inversed} riskLevel={riskLevel}>
      <Section>
        <Link href="/">
          <a>
            <CoronaIcon color={riskLevel ? 'white' : 'red'} />
          </a>
        </Link>

        {children}
      </Section>
    </Wrapper>
  )
}
