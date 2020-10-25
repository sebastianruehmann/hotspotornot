import React from 'react'
import { ExternalSourceLink } from '../ExternalSourceLink'
import { useLocalMeasure } from './useLocalMeasure'
import { Section } from '../Layout'
import { Grid } from '../Grid'
import { Headline2 } from '../Headline2'

export const LocalMeasure = ({ area }) => {
  const localMeasure = useLocalMeasure(area)

  return (
    <Section>
      <Headline2>Gezielte Maßnahmen für {area}</Headline2>
      <p>
        Unter dem folgendem Link findest du die aktuell geltenden Regeln für{' '}
        {area}.
      </p>

      <Grid>
        <ExternalSourceLink href={localMeasure.url}>
          {localMeasure.title}
        </ExternalSourceLink>
      </Grid>
    </Section>
  )
}
