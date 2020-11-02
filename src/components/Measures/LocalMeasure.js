import React from 'react'
import { ExternalSourceLink } from '../ExternalSourceLink'
import { useLocalMeasure } from './useLocalMeasure'
import { Section } from '../Section'
import { Grid } from '../Grid'
import { Headline2 } from '../Headline2'
import { useTranslation } from '../../i18n'

export const LocalMeasure = ({ area }) => {
  const localMeasure = useLocalMeasure(area)
  const { t } = useTranslation()

  return (
    <Section>
      <Headline2>{t('measures.local.headline', { area })}</Headline2>
      <p>{t('measures.local.linkDescription', { area })}</p>

      <Grid>
        <ExternalSourceLink href={localMeasure.url}>
          {localMeasure.title}
        </ExternalSourceLink>
      </Grid>
    </Section>
  )
}
