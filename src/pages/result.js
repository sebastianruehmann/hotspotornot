import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { search } from '../services/Api'
import {
  Title,
  Section,
  Measures,
  Header,
  LoadingIndicator,
  PageHead,
  NoResultsWrapper,
  Footer,
} from '../components'
import { RISK_LEVELS } from '../constants'
import { hasHigherRiskLevel, mapRiskLevel } from '../services/RiskLevels'
import { Trans, useTranslation } from '../i18n'

const IncidenceValue = styled.h2`
  font-weight: bold;
`

const Result = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const coords = router.query.coords || []
  const { isError, data } = useQuery(
    ['area', coords],
    () => search(coords[0], coords[1]),
    {
      enabled: !!coords,
      retry: false,
      onSuccess: (data) => {
        router.replace(
          {
            pathname: '/result',
            query: { coords },
          },
          `/s/${data.area}`,
          { shallow: true }
        )
      },
    }
  )

  if (!data) {
    return (
      <>
        <PageHead title={t('result.loadingTitle')} />
        <LoadingIndicator />
        <Footer />
      </>
    )
  }

  if (isError) {
    return (
      <>
        <PageHead title={t('result.noDataTitle')} />

        <NoResultsWrapper>
          <Section>
            <Title>{t('result.noDataHeadline')}</Title>
          </Section>
        </NoResultsWrapper>

        <Footer />
      </>
    )
  }

  const { area, cases7Per100k, state } = data

  const riskLevel = mapRiskLevel(cases7Per100k)
  const message = hasHigherRiskLevel(riskLevel, RISK_LEVELS.medium)
    ? t('result.hotspot', { area })
    : t('result.noHotspot', { area })

  return (
    <>
      <PageHead title={message} />

      <main>
        <Header riskLevel={riskLevel} inversed>
          <Title>{message}</Title>
          <IncidenceValue>
            {t('result.incidenceValue', {
              incidence: cases7Per100k.toLocaleString('de-DE', {
                maximumFractionDigits: 2,
              }),
            })}
          </IncidenceValue>
        </Header>

        <Measures riskLevel={riskLevel} area={area} state={state} />
      </main>

      <Footer />
    </>
  )
}

export default Result
