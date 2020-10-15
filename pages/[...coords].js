import Head from 'next/head'
import {useRouter} from 'next/router'
import {useQuery} from 'react-query'
import {search} from '../services/Api'
import {Main, Title, Footer} from '../components/Layout'

const Result = () => {
  const router = useRouter()
  const coords = router.query.coords
  const {
    isIdle, isLoading, isSuccess, isError, data, error, refetch,
  } = useQuery('area', () => search(coords[0], coords[1]), {
    enabled: !!coords,
  });

  const { GEN: area, cases7_per_100k } = data?.features?.[0]?.attributes || {};
  const isRiskArea = cases7_per_100k >= 35;

  const message = isRiskArea ? `${area} is a Covid-19 Hotspot` : `${area} is not a Covid-19 Hotspot`;

  return (
    <div>
      <Head>
        <title>{isSuccess ? message : 'Loading..'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          {isSuccess ? message : 'Loading..'}
        </Title>
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
