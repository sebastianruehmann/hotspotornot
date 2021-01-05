import React from 'react'
import styled from 'styled-components'

import { Headline2 } from '../Headline2'
import { Grid } from '../Grid'
import { Section } from '../Section'
import { ExternalSourceLink } from '../ExternalSourceLink'
import { useLocalMeasure } from './useLocalMeasure'
import { RISK_LEVELS } from '../../constants'

const MeasureHeadline = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.3rem;
`

const Wrapper = styled.div`
  display: flex;
`

const measures = [
  {
    title: 'Kontaktbeschränkungen',
    description:
      'Es dürfen maximal zehn Personen mit maximal zwei Haushalten zusammenkommen. Grundsätzlich gilt, Kontakte auf ein nötiges Minimum zu reduzieren.',
  },
  {
    title: 'Groß- und Einzelhandel',
    description:
      'Der Groß- und Einzelhandel bleibt geöffnet. Es gilt eine Pflicht zum Tragen eines Mund-Nasen-Schutzes beim Einkaufen.',
  },
  {
    title: 'Gastronomie',
    description:
      'Restaurants sowie Bars, Clubs, Diskotheken, Kneipen und ähnliche Einrichtungen bleiben geschlossen. Davon ausgenommen sind die Lieferung und Abholung von Speisen für den Verzehr zu Hause.',
  },
  {
    title: 'Kino, Theater, Opern, Konzerthäuser',
    description:
      'Alle Theater, Kino, Opern- und Konzerthäuser sowie ähnliche Einrichtungen bleiben geschlossen.',
  },
  {
    title: 'Dienstleistungen Körperpflege',
    description:
      'Kosmetikstudios, Massagepraxen, Tattoo-Studios und ähnliche Betriebe bleiben geschlossen. Physio-, Ergo- und Logotherapien sowie Podologie/Fußpflege bleiben weiter möglich. Des Weiteren bleiben Friseure geöffnet.',
  },
  {
    title: 'Sport',
    description:
      'Fitnessstudios und ähnliche Einrichtungen bleiben geschlossen. Erlaubt bleibt der Individualsport sowie Sport zu zweit oder mit den Angehörigen des eigenen Hausstands.',
  },
  {
    title: 'Spielplätze',
    description:
      'Spielplätze haben in den allermeisten Bundesländern geöffnet.',
  },
  {
    title: 'Amateursport',
    description: 'Der Freizeit- und Amateursportbetrieb wird eingestellt.',
  },
  {
    title: 'Profisport',
    description:
      'Profisportveranstaltungen dürfen nur ohne Zuschauer stattfinden.',
  },
  {
    title: 'Zoobesuche',
    description:
      'Zoos, zoologische Gärten oder Tieparks sind grundsätzlich geschlossen.',
  },
  {
    title: 'Kitas & Schulen',
    description:
      'Kitas und Schulen bleiben wie bisher auch geöffnet. Es können allerdings pro Bundesland unterschiedliche Regelungen (z.B. beim Tragen des Mund-Nasen-Schutzes) gelten.',
  },
]

const useMeasures = ({ area, state }) => {
  const measures = []

  const localMeasure = useLocalMeasure(area)
  if (localMeasure) {
    measures.push(localMeasure)
  }

  measures.push(
    {
      url: `https://corona-was-darf-ich.de/de/${state.replace('-', '_')}`,
      title: 'FAQ über lokale Regelungen',
    },
    {
      url:
        'https://www.bundesregierung.de/breg-de/themen/coronavirus/corona-massnahmen-1734724',
      title: 'FAQ bundesregierung.de',
    },
    {
      url:
        'https://www.bundesregierung.de/breg-de/themen/coronavirus/corona-bundeslaender-1745198',
      title: 'Regeln der Bundesländer',
    }
  )

  return measures
}

const VeryHighIncidenceMeasure = () => {
  return (
    <Wrapper>
      <div>
        <MeasureHeadline>Bewegungseinschränkungen</MeasureHeadline>
        <p>
          Der Bewegungsradius um den Wohnort wird auf 15 Kilometer begrenzt.
        </p>
      </div>
    </Wrapper>
  )
}

export const LockdownMeasures = ({ area, state, riskLevel }) => {
  const helpfulLinks = useMeasures({ area, state })

  return (
    <>
      <Section>
        <Headline2>Hilfreiche Links</Headline2>
        <p>
          Anbei findest du nützliche Links zu vertrauenswürdigen Seiten, auf
          denen du dich informieren kannst.
        </p>
        <Grid>
          {helpfulLinks.map((it, index) => (
            <ExternalSourceLink key={index} href={it.url}>
              {it.title}
            </ExternalSourceLink>
          ))}
        </Grid>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Headline2>Maßnahmen</Headline2>
        <p>
          Seit dem 02.11.20 gelten in Deutschland die folgenden einheitlichen
          Regelungen.
        </p>

        <div>
          <Grid>
            {measures.map(({ title, description }) => (
              <Wrapper key={title}>
                <div>
                  <MeasureHeadline>{title}</MeasureHeadline>
                  <p>{description}</p>
                </div>
              </Wrapper>
            ))}
            {riskLevel === RISK_LEVELS.veryHigh ? (
              <VeryHighIncidenceMeasure />
            ) : null}
          </Grid>
        </div>
      </Section>
    </>
  )
}
