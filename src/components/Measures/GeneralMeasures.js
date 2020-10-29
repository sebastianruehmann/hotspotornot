import React from 'react'
import styled from 'styled-components'

import { Section } from '../Section'
import { Grid } from '../Grid'
import { Headline2 } from '../Headline2'
import { useTranslation } from '../../i18n'
import { useMeasures } from './useMeasures'

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
  const { t } = useTranslation()
  const measures = useMeasures()
  const allMeasures = measures.filter(({ type }) => riskLevel === type)

  if (!allMeasures.length) {
    return null
  }

  return (
    <Section style={{ paddingTop: 0 }}>
      <Headline2>{t('measures.general.headline')}</Headline2>
      <p>{t('measures.general.description')}</p>

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
