import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { search } from '../services/Api'
import {
  Title,
  Section,
  Header,
  LoadingIndicator,
  PageHead,
  NoResultsWrapper,
  Footer,
} from '../components'
import { RISK_LEVELS } from '../constants'
import { hasHigherRiskLevel, mapRiskLevel } from '../services/RiskLevels'
import { HomeLink } from '../components/HomeLink'

const IncidenceValue = styled.h2`
  font-weight: bold;
`

const Result = () => {
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
        <PageHead title="Laden..." />
        <LoadingIndicator />
        <Footer />
      </>
    )
  }

  if (isError) {
    return (
      <>
        <PageHead title="Keine Daten" />

        <NoResultsWrapper>
          <Section>
            <Title>Das RKI hat leider keine Daten für den Standort.</Title>
          </Section>
        </NoResultsWrapper>

        <Footer />
      </>
    )
  }

  const { area, cases7Per100k, lastUpdated, state } = data

  const riskLevel = mapRiskLevel(cases7Per100k)
  const message = hasHigherRiskLevel(riskLevel, RISK_LEVELS.medium)
    ? `${area} ist ein Covid-19 Hotspot.`
    : `${area} ist kein Covid-19 Hotspot.`

  return (
    <>
      <PageHead title={message} />

      <main>
        <Header riskLevel={riskLevel} inversed big>
          <Title>{message}</Title>
          <IncidenceValue>
            Die 7-Tage-Inzidenz liegt aktuell bei{' '}
            {cases7Per100k.toLocaleString('de-DE', {
              maximumFractionDigits: 2,
            })}
            .
          </IncidenceValue>

          <h3
            style={{ marginTop: '16px', fontWeight: '600', fontSize: '1.6rem' }}
          >
            Im Bundesland {state} haben bisher{' '}
            {data.firstDose.toLocaleString('de-DE', {
              maximumFractionDigits: 2,
            })}
            {'\u00A0'}% mindestens die erste Impfdosis erhalten,{' '}
            {data.secondDose.toLocaleString('de-DE', {
              maximumFractionDigits: 2,
            })}
            {'\u00A0'}% sind vollständig geimpft.
          </h3>

          <small>Daten vom {lastUpdated}</small>

          <div style={{ marginTop: '48px' }}>
            <Link href="/" passHref>
              <HomeLink riskLevel={riskLevel}>Neue Suche</HomeLink>
            </Link>
          </div>
        </Header>
      </main>

      <Footer />
    </>
  )
}

export default Result
