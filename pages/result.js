import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { search } from '../services/Api'
import { Main, Title, Section } from '../components/Layout'
import { Measures } from '../components/Measures/Measures'
import Header from '../components/Header'
import { RISK_LEVELS } from '../constants'
import { hasHigherRiskLevel, mapRiskLevel } from '../services/RiskLevels'
import CoronaIcon from '../components/assets/coronavirus'
import { LoadingIndicator } from '../components/LoadingIndicator'
import { PageHead } from '../components/PageHead'
import { NoResultsWrapper } from '../components/NoResultsWrapper'
import { Footer } from '../components/Footer'

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

  const { area, cases7Per100k, state } = data

  const riskLevel = mapRiskLevel(cases7Per100k)
  const message = hasHigherRiskLevel(riskLevel, RISK_LEVELS.medium)
    ? `${area} ist ein Covid-19 Hotspot.`
    : `${area} ist kein Covid-19 Hotspot.`

  return (
    <>
      <PageHead title={message} />

      <Main>
        <Header riskLevel={riskLevel} inversed>
          <Section>
            <Link href="/">
              <a>
                <WhiteCoronaIcon />
              </a>
            </Link>
            <Title>{message}</Title>
            <IncidenceValue>
              Die 7-Tage-Inzidenz liegt aktuell bei{' '}
              {cases7Per100k.toLocaleString('de-DE', {
                maximumFractionDigits: 2,
              })}
              .
            </IncidenceValue>
          </Section>
        </Header>

        <Measures riskLevel={riskLevel} area={area} state={state} />
      </Main>

      <Footer />
    </>
  )
}

export default Result
