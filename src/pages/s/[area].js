import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import axios from 'axios'
import { RISK_LEVELS } from '../../constants'
import { searchByArea, fetchAreas } from '../../services/Api'
import { hasHigherRiskLevel, mapRiskLevel } from '../../services/RiskLevels'
import {
  Title,
  Section,
  Measures,
  Header,
  LoadingIndicator,
  PageHead,
  NoResultsWrapper,
  Footer,
} from '../../components'

const IncidenceValue = styled.h2`
  font-weight: bold;
`

const Area = ({ result }) => {
  const { area, cases7Per100k, state } = result || {}

  const riskLevel = mapRiskLevel(cases7Per100k)
  const message = hasHigherRiskLevel(riskLevel, RISK_LEVELS.medium)
    ? `${area} ist ein Covid-19 Hotspot.`
    : `${area} ist kein Covid-19 Hotspot.`

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
        </Header>

        <Measures riskLevel={riskLevel} area={area} state={state} />
      </main>

      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const areas = await fetchAreas()

  const paths = areas.map((area) => ({
    params: { area: area },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(props) {
  const result = await searchByArea(props.params.area)

  return { props: { result }, revalidate: 30 }
}

export default Area
