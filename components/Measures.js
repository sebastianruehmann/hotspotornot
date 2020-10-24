import styled from 'styled-components'
import { RISK_LEVELS } from '../constants'

import BarIcon from './assets/bar'
import GroupIcon from './assets/group'
import MasksIcon from './assets/masks'
import SocialDistancingIcon from './assets/social-distancing'
import MoreIcon from './assets/more'
import { Section } from './Layout'

const measures = [
  {
    title: 'Maskenpflicht',
    description:
      'Überall im öffentlichen Raum, wo Menschen dichter und länger zusammenkommen.',
    type: RISK_LEVELS.medium,
    Icon: MasksIcon,
  },
  {
    title: 'Private Feiern',
    description:
      'Höchstens 25 Personen sind im öffentlichen Raum erlaubt, 15 aus maximal zwei Haushalten bei Feiern zuhause.',
    type: RISK_LEVELS.medium,
    Icon: GroupIcon,
  },
  {
    title: 'Maskenpflicht',
    description:
      'Überall im öffentlichen Raum, wo Menschen dichter und länger zusammenkommen. Individuelle Erweiterung möglich.',
    type: RISK_LEVELS.high,
    Icon: MasksIcon,
  },
  {
    title: 'Private Feiern',
    description:
      'Höchstens 10 Personen sind im öffentlichen Raum erlaubt, 10 aus maximal zwei Haushalten bei Feiern zuhause.',
    type: RISK_LEVELS.high,
    Icon: GroupIcon,
  },
  {
    title: 'Sperrstunde für Gastronomie',
    description:
      'Verbindliche Sperrstunde um 23 Uhr, außerdem Außenabgabeverbot von Alkohol ab 23 Uhr.',
    type: RISK_LEVELS.high,
    Icon: BarIcon,
  },
  {
    title: 'Kontaktbeschränkungen',
    description:
      'Höchstens 10 Personen sind im öffentlichen Raum erlaubt. Wenn weitere Maßnahmen keine Besserung bringen, kann die Beschränkung auf 5 Personen oder zwei Haushalte reduziert werden.',
    type: RISK_LEVELS.high,
    Icon: SocialDistancingIcon,
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

const MeasureHeadline = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.3rem 0 0.2rem;
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
  const allMeasures = measures.filter(({ type }) => riskLevel === type)

  if (!allMeasures.length) {
    return null
  }

  return (
    <>
      <h2>Grundsätzliche Maßnahmen</h2>
      <p>
        Wie in der deutschen Hotspot-Strategie vorgesehen, sind mindestens die
        folgenden Maßnahmen einzuhalten. Diese Regelungen gelten grundsätzlich,
        können aber durch die gezielten Maßnahmen verschärft worden sein.
      </p>

      <div>
        <Grid>
          {allMeasures.map(({ title, description, Icon }) => (
            <Wrapper key={title}>
              <IconWrapper>
                <Icon />
              </IconWrapper>
              <div>
                <MeasureHeadline>{title}</MeasureHeadline>
                <p>{description}</p>
              </div>
            </Wrapper>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default Measures
