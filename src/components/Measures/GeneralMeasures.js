import React from 'react'
import styled from 'styled-components'

import { Headline2 } from '../Headline2'
import { Grid } from '../Grid'
import { Section } from '../Section'
import { ExternalSourceLink } from '../ExternalSourceLink'
import { useLocalMeasure } from './useLocalMeasure'
import { useLocalMeasures } from './useMeasures'

const MeasureHeadline = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.3rem;
`

const Wrapper = styled.div`
  display: flex;
`

const useHelpfulLinks = ({ area, state }) => {
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

export const GeneralMeasures = ({ area, state, incidence }) => {
  const helpfulLinks = useHelpfulLinks({ area, state })
  const measures = useLocalMeasures(incidence)

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
          Bis vorläufig zum 28. März 2021 gelten in Deutschland die folgenden
          einheitlichen Maßnahmen. Diese können in Ausnahmefällen regional
          verschärft werden, deshalb informiere dich auch bei deinem
          Gesundheitsamt.
        </p>

        <div>
          <Grid>
            {measures.map(({ title, description }) => (
              <Wrapper key={title}>
                <div>
                  <MeasureHeadline>{title}</MeasureHeadline>
                  <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>
              </Wrapper>
            ))}
          </Grid>
          <p>Aktualisiert am 08.03.2021</p>
        </div>
      </Section>
    </>
  )
}
