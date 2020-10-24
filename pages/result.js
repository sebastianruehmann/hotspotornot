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
import { Footer } from '../components/Footer'
import MoreIcon from '../components/assets/more'

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

const Wrapper = styled.div`
  display: flex;
`

const IncidenceValue = styled.h2`
  font-weight: bold;
`

const CustomLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  padding: 16px;
  background: #0071e3;
  border-radius: 4px;
  color: white;
  width: 100%;
  display: inline-block;
  text-align: center;
  font-size: 16px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem 2rem;
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
          <Section wrapped>
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
          <Section wrapped>
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
        <Section wrapped>
          <h2>Gezielte Maßnahmen</h2>
          <p>
            Pro Bundesland und Landkreis können abweichende Regelungen gelten.
            Da sich diese stetig ändern, findest du hier entsprechende Links,
            die dir Informationen über die an diesem Ort geltenden Regelungen
            liefern.
          </p>

          <Grid>
            <CustomLink
              href={`https://corona-was-darf-ich.de/de/${state.replace(
                '-',
                '_'
              )}`}
            >
              FAQ über lokale Regelungen
            </CustomLink>

            <CustomLink href="https://www.bundesregierung.de/breg-de/themen/coronavirus/corona-bundeslaender-1745198">
              Informationen der Bundesländer
            </CustomLink>
          </Grid>
        </Section>

        <Section wrapped style={{ paddingTop: 0 }}>
          <Measures riskLevel={riskLevel} />
        </Section>
      </Main>

      <Footer />
    </>
  )
}

export default Result
