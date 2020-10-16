import Head from 'next/head'
import {useRouter} from 'next/router'
import {useQuery} from 'react-query'
import {search} from '../services/Api'
import {Main, Title, Footer, Image} from '../components/Layout'
import Measures from '../components/Measures'
import Loading from '../components/Loading'
import Card from '../components/Card'
import {RISK_LEVELS} from '../constants';
import {hasHigherRiskLevel, mapRiskLevel} from '../services/RiskLevels';


const Result = () => {
  const router = useRouter()
  const coords = router.query.coords
  const {
    isIdle, isLoading, isSuccess, isError, data, error, refetch,
  } = useQuery('area', () => search(coords[0], coords[1]), {
    enabled: !!coords,
  })

  const { GEN: area, cases7_per_100k: cases7Per100k } = data?.features?.[0]?.attributes || {}

  const riskLevel = mapRiskLevel(cases7Per100k)
  const message = hasHigherRiskLevel(riskLevel, RISK_LEVELS.medium) ? `${area} is not a Covid-19 Hotspot` : `${area} is a Covid-19 Hotspot`;

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
            <Image src="/corona.jpg" />
            <Card title={message} riskLevel={riskLevel} />
            <Measures riskLevel={riskLevel} />
          </>
        ) : null}
      </Main>

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by data from{' '}
          RKI
        </a>
      </Footer>
    </div>
  )
}

export default Result
