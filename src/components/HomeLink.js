import styled, { css } from 'styled-components'
import { RISK_LEVELS } from '../constants'

const backgroundStyles = ({ riskLevel }) => {
  switch (riskLevel) {
    case RISK_LEVELS.low:
      return css`
        background-color: #2ea03a;
        color: white;
      `
    case RISK_LEVELS.medium:
      return css`
        background-color: #bda81d;
        color: white;
      `
    case RISK_LEVELS.high:
      return css`
        background-color: #a22727;
        color: white;
      `
    case RISK_LEVELS.veryHigh:
      return css`
        background-color: #500303;
        color: #cecece;
      `
  }
}

export const HomeLink = styled.a`
  display: inline-block;
  padding: 13px;
  border-radius: 4px;
  font-size: 1.3rem;
  text-align: center;
  width: 100%;
  ${backgroundStyles};

  @media screen and (min-width: 450px) {
    width: 200px;
  }
`
