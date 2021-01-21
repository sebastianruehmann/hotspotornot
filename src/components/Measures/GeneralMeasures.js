import React from 'react'
import styled from 'styled-components'
import { Section } from '../Section'
import { Grid } from '../Grid'
import { Headline2 } from '../Headline2'
import {
  MasksIcon,
  GroupIcon,
  BarIcon,
  SocialDistancingIcon,
} from '../../icons'
import { RISK_LEVELS } from '../../constants'

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

const MeasureHeadline = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.3rem;
`

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

export const GeneralMeasures = ({ riskLevel }) => {
  const allMeasures = measures.filter(({ type }) => riskLevel === type)

  if (!allMeasures.length) {
    return null
  }

  return (
    <Section style={{ paddingTop: 0 }}>
      <Headline2>Grundsätzliche Maßnahmen</Headline2>
      <p>
        Die folgenden Regelungen wurden auf Bundesebene beschlossen. Bedenke
        jedoch, dass pro Bundesland und Landkreis diese teilweise abweichen
        können.
      </p>
      <p>
        Alle bis zum 31. Januar befristeten Maßnahmen sind vorläufig bis zum 14.
        Februar 2021 verlängert.
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
    </Section>
  )
}
