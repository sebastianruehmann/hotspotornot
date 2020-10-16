import Head from 'next/head'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import {useQuery} from 'react-query'
import {search} from '../services/Api'
import {Main, Title, Subtitle, Footer, Image, Section} from '../components/Layout'
import Measures from '../components/Measures'
import Loading from '../components/Loading'
import Header from '../components/Header'
import {RISK_LEVELS} from '../constants';
import {hasHigherRiskLevel, mapRiskLevel} from '../services/RiskLevels';
import CoronaIcon from '../components/assets/corona-icon';

const WhiteCoronaIcon = styled(CoronaIcon)`
  height: auto;
  margin-bottom: 40px;
  width: 125px;
  path {
    fill: white;
  }
`

const Result = () => {
  const router = useRouter()
  const coords = router.query.coords
  const {
    isIdle, isLoading, isSuccess, isError, data, error, refetch,
  } = useQuery(['area', coords], () => search(coords[0], coords[1]), {
    enabled: !!coords,
  })

  const { GEN: area, cases7_per_100k: cases7Per100k } = data?.features?.[0]?.attributes || {}

  const riskLevel = mapRiskLevel(cases7Per100k)
  const message = hasHigherRiskLevel(riskLevel, RISK_LEVELS.medium) ? `${area} ist ein Covid-19 Hotspot` : `${area} ist kein Covid-19 Hotspot`;

  return (
    <div>
      <Head>
        <title>{isSuccess ? message : 'Loading..'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        {isLoading ? <Loading /> : null}
        {isSuccess ? (
          <>
            <Header riskLevel={riskLevel}>
              <WhiteCoronaIcon />
              <Title>{message}</Title>
            </Header>
            <Section wrapped>
              <Subtitle>Auflagen</Subtitle>
              <Measures riskLevel={riskLevel} />
            </Section>
          </>
        ) : null}
      </Main>

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by data from RKI
        </a>
      </Footer>
    </div>
  )
}

export default Result
