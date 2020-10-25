import React from 'react'
import { ExternalSourceLink } from '../ExternalSourceLink'
import { Section } from '../Layout'
import { Grid } from '../Grid'
import { Headline2 } from '../Headline2'

export const GeneralLocalMeasures = ({ state }) => {
  return (
    <Section>
      <Headline2>Gezielte Maßnahmen</Headline2>
      <p>
        Pro Bundesland und Landkreis können abweichende Regelungen gelten. Da
        sich diese stetig ändern, findest du hier entsprechende Links, die dir
        Informationen über die an diesem Ort geltenden Regelungen liefern.
      </p>

      <Grid>
        <ExternalSourceLink
          href={`https://corona-was-darf-ich.de/de/${state.replace('-', '_')}`}
        >
          FAQ über lokale Regelungen
        </ExternalSourceLink>

        <ExternalSourceLink href="https://www.bundesregierung.de/breg-de/themen/coronavirus/corona-bundeslaender-1745198">
          Informationen der Bundesländer
        </ExternalSourceLink>
      </Grid>
    </Section>
  )
}
