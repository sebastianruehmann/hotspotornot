import styled from 'styled-components'
import { RISK_LEVELS } from '../constants'
import { hasHigherRiskLevel } from '../services/RiskLevels'

import BarIcon from './assets/bar'
import GroupIcon from './assets/group'
import MasksIcon from './assets/masks'
import SocialDistancingIcon from './assets/social-distancing'
import MoreIcon from './assets/more'

const measures = [
  {
    title: 'Mask obligation',
    description:
      'Extended mask obligation in places where people come together more closely or for longer periods.',
    type: RISK_LEVELS.medium,
    Icon: MasksIcon,
  },
  {
    title: 'Private celebrations',
    description:
      'Private celebrations are generally limited to a maximum of ten participants and two households.',
    type: RISK_LEVELS.high,
    Icon: GroupIcon,
  },
  {
    title: 'Curfew',
    description:
      'A curfew is imposed at 23.00 for the catering trade. Bars and clubs will be closed.',
    type: RISK_LEVELS.high,
    Icon: BarIcon,
  },
  {
    title: 'Contact restrictions',
    description:
      'Maximum of ten people are allowed to meet in public spaces. If the new measures do not bring the increase to a halt, this can be reduced to up to five people or the members of two households.',
    type: RISK_LEVELS.high,
    Icon: SocialDistancingIcon,
  },
  {
    title: 'Weitere Maßnahmen',
    description:
      'Bitte informiere dich auch über mögliche weitere Maßnahmen für deinen Landkreises. <a target="_blank" href="https://corona-was-darf-ich.de/de/Berlin">Was darf ich?</a>',
    type: RISK_LEVELS.high,
    Icon: MoreIcon,
  },
]

const Wrapper = styled.div`
  display: flex;
`

const IconWrapper = styled.div`
  margin-right: 1rem;
  & svg {
    fill: #0071e3;
    height: 2rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem 2rem;
`

const AdditionalMeasures = styled.div`
  background: silver;
  border-radius: 8px;
  padding: 1rem;
  color: white;
`

function Measures({ riskLevel }) {
  const allMeasures = measures.filter(({ type }) =>
    hasHigherRiskLevel(riskLevel, type)
  )
  return (
    <div>
      {!allMeasures.length && 'Keine besonderen Auflagen'}
      <Grid>
        {allMeasures.map(({ title, description, Icon }) => (
          <Wrapper key={title}>
            <IconWrapper>
              <Icon />
            </IconWrapper>
            <div>
              <h4>{title}</h4>
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </Wrapper>
        ))}
      </Grid>
    </div>
  )
}

export default Measures
