import styled from 'styled-components';
import {RISK_LEVELS} from '../constants';
import {hasHigherRiskLevel} from '../services/RiskLevels';

const measures = [{
  title: 'Mask obligation',
  description: 'Extended mask obligation in places where people come together more closely or for longer periods.',
  type: RISK_LEVELS.medium
}, {
  title: 'Private celebrations',
  description: 'Private celebrations are generally limited to a maximum of ten participants and two households.',
  type: RISK_LEVELS.high
}, {
  title: 'Contact restrictions',
  description: 'Maximum of ten people are allowed to meet in public spaces. If the new measures do not bring the increase to a halt, this can be reduced to up to five people or the members of two households.',
  type: RISK_LEVELS.high
}, {
  title: 'Curfew',
  description: 'A curfew is imposed at 23.00 for the catering trade. Bars and clubs will be closed.',
  type: RISK_LEVELS.high
}]

const Wrapper = styled.div`
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 2rem;
`

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

function Measures({riskLevel}) {
  const allMeasures =  measures.filter(({type}) => hasHigherRiskLevel(riskLevel, type));
  return (
    <div>
      <Grid>
        {allMeasures.map(({title, description}) => (
          <Wrapper key={title}>
            <Title>{title}</Title>
            <p>{description}</p>
          </Wrapper>
        ))}
      </Grid>
    </div>
  )
}

export default Measures
