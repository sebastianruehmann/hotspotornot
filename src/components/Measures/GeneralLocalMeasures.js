import React from 'react'
import { ExternalSourceLink } from '../ExternalSourceLink'
import { Section } from '../Section'
import { Grid } from '../Grid'
import { Headline2 } from '../Headline2'
import { useTranslation } from '../../i18n'

export const GeneralLocalMeasures = ({ state }) => {
  const { t } = useTranslation()

  return (
    <Section>
      <Headline2>{t('measures.generalLocal.headline')}</Headline2>
      <p>{t('measures.generalLocal.description')}</p>

      <Grid>
        <ExternalSourceLink
          href={`https://corona-was-darf-ich.de/de/${state.replace('-', '_')}`}
        >
          {t('measures.generalLocal.coronaWasDarfIchLinkText')}
        </ExternalSourceLink>

        <ExternalSourceLink href="https://www.bundesregierung.de/breg-de/themen/coronavirus/corona-bundeslaender-1745198">
          {t('measures.generalLocal.bundesregierungLinkText')}
        </ExternalSourceLink>
      </Grid>
    </Section>
  )
}
