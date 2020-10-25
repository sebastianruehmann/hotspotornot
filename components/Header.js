import React from 'react'
import styled, { css } from 'styled-components'
import { RISK_LEVELS } from '../constants'

import { CoronaIcon as OriginalCoronaIcon } from '../icons'
import Link from 'next/link'
import { Section } from './Layout'

const RedCoronaIcon = styled(OriginalCoronaIcon)`
  height: auto;
  margin-bottom: 40px;
  width: 125px;

  & .body {
    fill: #d73d34;
  }
  & .circles {
    fill: #ad3129;
  }
`

const WhiteCoronaIcon = styled(RedCoronaIcon)`
  height: auto;
  margin-bottom: 40px;
  width: 125px;

  & .body {
    fill: white;
  }
  & .circles {
    fill: lightgrey;
  }
`

const CoronaIcon = ({ riskLevel }) => {
  if (!riskLevel) {
    return <RedCoronaIcon />
  }

  return <WhiteCoronaIcon />
}

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

export const Header = ({ riskLevel, inversed, children }) => {
  return (
    <Wrapper inversed={inversed} riskLevel={riskLevel}>
      <Section>
        <Link href="/">
          <a>
            <CoronaIcon riskLevel={riskLevel} />
          </a>
        </Link>

        {children}
      </Section>
    </Wrapper>
  )
}
