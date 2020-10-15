import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import {useQuery} from 'react-query'
import {useEffect} from 'react'
import {usePosition} from '../hooks/usePosition'
import {Main, Title} from '../components/Layout'
import {search} from '../services/Api'

export default function Home() {
  const { coords, isIdle, request } = usePosition()
  const router = useRouter()

  useEffect(() => {
    if (coords) router.push(coords.join("/"))
  }, [coords]);

  return (
    <div>
      <Head>
        <title>Hotspot or not?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          Am I in a Covid-19 Hotspot?
        </Title>
        <Button onClick={request} disabled={isIdle}>{isIdle ? 'Loading...' : 'Find out'}</Button>
      </Main>
    </div>
  )
}

const Button = styled.button`
  background: none;
  border-radius: 10px;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;

  :disabled {
    background: #333;
    color: white;
  }
`
