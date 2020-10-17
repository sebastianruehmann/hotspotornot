import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { search } from '../services/Api'
import { Main, Title, Subtitle, Section } from '../components/Layout'
import Measures from '../components/Measures'
import Header from '../components/Header'
import { RISK_LEVELS } from '../constants'
import { hasHigherRiskLevel, mapRiskLevel } from '../services/RiskLevels'
import CoronaIcon from '../components/assets/coronavirus'
import { LoadingIndicator } from '../components/LoadingIndicator'

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

const NoResultsWrapper = styled.div`
  height: 100vh;
  background: #f5f5f7;
`

const PageHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
)

const Result = () => {
  const router = useRouter()
  const coords = router.query.coords
  const { data, isError } = useQuery(
    ['area', coords],
    () => search(coords[0], coords[1]),
    {
      enabled: !!coords,
    }
  )

  if (isError) {
    return (
      <>
        <PageHead title="Fehler beim Laden" />
        <NoResultsWrapper>
          <Section wrapped>
            <Title>
              Leider gab es einen Fehler beim Abrufen der Daten des RKIs.
            </Title>
          </Section>
        </NoResultsWrapper>
      </>
    )
  }

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
        <Header riskLevel={riskLevel}>
          <WhiteCoronaIcon />
          <Title>{message}</Title>
        </Header>
        <Section wrapped>
          <Subtitle>Bundesweite Auflagen</Subtitle>
          <Measures riskLevel={riskLevel} />
          <div>
            Je nach Bundesland und Landkreis kann es noch weitergehende Auflagen
            geben.
          </div>
        </Section>
      </Main>
    </>
  )
}

export default Result
