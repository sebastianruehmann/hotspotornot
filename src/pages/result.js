import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { Adsense } from '@ctrl/react-adsense'
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
import { TestIcon, MasksIcon } from '../icons'
import { Measure } from '../components/Measure'
import { Grid } from '../components/Grid'
import { measureDatabase } from '../measures-database'

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

  const measures = measureDatabase['All'].map(({ name, description }) => ({
    name,
    description: [
      description,
      measureDatabase[state].find((el) => el.name === name)?.description,
    ].join(' '),
  }))

  const measureIconMap = (name) => {
    const measureNameIcons = {
      Maskenpflicht: MasksIcon,
      Testpflicht: TestIcon,
    }
    return measureNameIcons[name] || null
  }
  return (
    <>
      <PageHead title={message} />

      <main>
        <Header riskLevel={riskLevel} inversed>
          <Title>{message}</Title>
          <IncidenceValue>
            Die 7-Tage-Inzidenz liegt aktuell bei{' '}
            {cases7Per100k.toLocaleString('de-DE', {
              maximumFractionDigits: 2,
            })}
            .
          </IncidenceValue>

          <small>Daten vom {lastUpdated}</small>

          <div style={{ marginTop: '48px' }}>
            <Link href="/" passHref>
              <HomeLink riskLevel={riskLevel}>Neue Suche</HomeLink>
            </Link>
          </div>
        </Header>
        <div
          style={{
            margin: '0 auto',
            padding: 40,
            maxWidth: 1040,
            width: '100%',
          }}
        >
          <h2>Maßnahmen</h2>
          <p>
            Seit dem 1. Oktober gelten neue bundesweite und länderspezifische
            Maßnahmen zur Eindämmung der Corona-Pandemie.
          </p>
          <Grid>
            {measures.map(({ name, description }) => (
              <Measure
                key={name}
                Icon={measureIconMap(name)}
                name={name}
                description={description}
              />
            ))}
          </Grid>
          <Adsense
            client="ca-pub-7744980260457752"
            slot="4769756892"
            style={{ display: 'block' }}
            responsive="true"
            layoutKey="-gw-1+2a-9x+5c"
          />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Result
