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
      'Private Zusammenkünfte sind nur noch mit einer weiteren nicht im Haushalt lebenden Person erlaubt.',
  },
  {
    title: 'Einzelhandel',
    description:
      'Der Einzelhandel ist bis auf Weiteres geschlossen. Ausnahmen gelten für Lebensmittelgeschäfte, Drogerien, Apotheken, Optiker, Tankstellen, Autowerkstätten, Banken, die Post, Reinigungen und Weihnachtsbaumhändler.',
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
      'Kosmetikstudios, Massagepraxen, Tattoo-Studios, Friseure und ähnliche Betriebe bleiben geschlossen. Physio-, Ergo- und Logotherapien sowie Podologie/Fußpflege bleiben weiter möglich.',
  },
  {
    title: 'Sport',
    description:
      'Fitnessstudios und ähnliche Einrichtungen bleiben geschlossen. Erlaubt bleibt der Individualsport sowie Sport zu zweit oder mit den Angehörigen des eigenen Hausstands.',
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
      'Kinder sollen in dieser Zeit wann immer möglich zu Hause betreut werden. Daher werden in diesem Zeitraum Schulen und Kindertagesstätte grundsätzlich geschlossen oder die Präsenzpflicht wird ausgesetzt. Es wird eine Notfallbetreuung sichergestellt und Distanzlernen angeboten.',
  },
  {
    title: 'Betriebsstätten',
    description:
      'Arbeitgeberinnen und Arbeitgeber werden dringend gebeten zu prüfen, ob die Betriebsstätten entweder durch Betriebsferien oder großzügige Home-Office-Lösungen bis zum 31. Januar 2021 geschlossen werden können.',
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
          Ab dem 11. Januar gilt für Landkreise mit einer 7-Tages-Inzidenz über
          200 eine Beschränkung des Bewegungsradius auf 15km um den Wohnort,
          sofern kein triftiger Grund vorliegt.
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
          Seit dem 16.12.20 gelten in Deutschland die folgenden einheitlichen
          Regelungen. Diese können in Außnahmefällen regional verschärft werden,
          deshalb informiere dich auch bei deinem Gesundheitsamt.
        </p>

        <p>
          Alle bis zum 10. Januar befristeten Maßnahmen werden bis zum 31.
          Januar 2021 verlängert - auch die Einschränkungen des Schulbetriebs
          und der Kindertagesstätten.
        </p>

        <div>
          <Grid>
            {riskLevel === RISK_LEVELS.veryHigh ? (
              <VeryHighIncidenceMeasure />
            ) : null}
            {measures.map(({ title, description }) => (
              <Wrapper key={title}>
                <div>
                  <MeasureHeadline>{title}</MeasureHeadline>
                  <p>{description}</p>
                </div>
              </Wrapper>
            ))}
          </Grid>
        </div>
      </Section>
    </>
  )
}
