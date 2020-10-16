import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import {useQuery} from 'react-query'
import {useEffect} from 'react'
import {usePosition} from '../hooks/usePosition'
import {Main, Title, Paragraph} from '../components/Layout'
import {Accordion} from '../components/Accordion'
import {search} from '../services/Api'

export default function Home() {
  const { coords, isIdle, request } = usePosition()
  const router = useRouter()

  useEffect(() => {
    if (coords) router.push(coords.join("/"))
  }, [coords]);

  return (
    <>
      <Head>
        <title>Hotspot or not?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Image src="/corona.jpg" width="100" />
        <Container>
          <Title>
            Bin ich in einem <Nobr>Covid-19</Nobr> H<I>o</I>tsp<I>o</I>t?
          </Title>
          <Paragraph>
            Überprüfe jetzt anhand der RKI Daten, ob dein aktueller Standort ein <Nobr>Covid‑19</Nobr> Hotspot ist.
          </Paragraph>
          <Button onClick={request} disabled={isIdle}>{isIdle ? 'Standort angefragt...' : 'Überprüfen'}</Button>
        </Container>
      </Main>
    </>
  )
}

const I = styled.i`
  color: #FF0000;
`

const Nobr = styled.span`
  white-space: nowrap;
`

const Container = styled.div`
  max-width: 700px;
  width: 100%;
`

const Image = styled.img`
  margin-bottom: 40px;
  width: 125px;
`

const Button = styled.button`
  background: #0071e3;
  border: none;
  border-radius: 22px;
  color: white;
  font-size: 1.3rem;
  font-weight: 400;
  padding: 13px 25px;

  :disabled {
    background: #333;
    color: white;
  }
`
