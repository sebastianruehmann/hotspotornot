import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { search } from '../services/Api'
import { Main, Title, Section } from '../components/Layout'
import Measures from '../components/Measures'
import Header from '../components/Header'
import { RISK_LEVELS } from '../constants'
import { hasHigherRiskLevel, mapRiskLevel } from '../services/RiskLevels'
import CoronaIcon from '../components/assets/coronavirus'
import { LoadingIndicator } from '../components/LoadingIndicator'
import { PageHead } from '../components/PageHead'
import { NoResultsWrapper } from '../components/NoResultsWrapper'

const WhiteCoronaIcon = styled(CoronaIcon)`
  height: auto;
  margin-bottom: 40px;
  width: 125px;

  & .body {
    fill: white;
  }
  & .circles {
    fill: lightgrey;
  }
`

const IncidenceValue = styled.h2`
  font-weight: bold;
`

const Result = () => {
  const router = useRouter()
  const coords = router.query.coords || []
  console.log(router.query)
  const { data } = useQuery(
    ['area', coords.join(',')],
    () => search(coords[0], coords[1]),
    {
      enabled: !!coords,
      onSuccess: (data) => {
        const attributes = data.features[0]?.attributes || {}

        if (!Object.keys(attributes).length) {
          return
        }

        router.push(
          {
            pathname: '/result',
            query: { coords },
          },
          `/s/${attributes.GEN}`,
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
      </>
    )
  }

  if (!data.features.length) {
    return (
      <>
        <PageHead title="Keine Daten" />

        <NoResultsWrapper>
          <Section wrapped>
            <Title>Das RKI hat leider keine Daten für den Standort.</Title>
          </Section>
        </NoResultsWrapper>
      </>
    )
  }

  const { GEN: area, cases7_per_100k: cases7Per100k } =
    data.features[0]?.attributes || {}

  const riskLevel = mapRiskLevel(cases7Per100k)
  const message = hasHigherRiskLevel(riskLevel, RISK_LEVELS.medium)
    ? `${area} ist ein Covid-19 Hotspot.`
    : `${area} ist kein Covid-19 Hotspot.`

  return (
    <>
      <PageHead title={message} />

      <Main>
        <Header riskLevel={riskLevel} inversed>
          <Section wrapped>
            <Link href="/">
              <a>
                <WhiteCoronaIcon />
              </a>
            </Link>
            <Title>{message}</Title>
            <IncidenceValue>
              Die 7-Tage-Inzidenz
              <br />
              liegt aktuell bei{' '}
              {cases7Per100k.toLocaleString('de-DE', {
                maximumFractionDigits: 2,
              })}
              .
            </IncidenceValue>
          </Section>
        </Header>
        <Section wrapped>
          <h2>Maßnahmen</h2>
          <Measures riskLevel={riskLevel} />
        </Section>
      </Main>
    </>
  )
}

export default Result
