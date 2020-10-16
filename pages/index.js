import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import {useQuery} from 'react-query'
import {useEffect, useState} from 'react'
import {usePosition} from '../hooks/usePosition'
import {Section, Main, Title, Paragraph} from '../components/Layout'
import {Accordion} from '../components/Accordion'
import {search} from '../services/Api'

export default function Home() {
  const { coords, isIdle, isError, request } = usePosition()
  const [error, setError] = useState(false);
  const router = useRouter()

  useEffect(() => {
    if (coords) router.push(coords.join("/"))
  }, [coords]);

  useEffect(() => {
    if (!isIdle && isError) {
      setError(true)
      setTimeout(() => setError(false), 3000)
    }
  }, [isIdle, isError]);

  return (
    <>
      <Head>
        <title>Hotspot or not?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Section grey>
          <Image src="/corona.jpg" width="100" />
          <Container>
            <Title>
              Bin ich in einem <Nobr>Covid-19</Nobr> H<I>o</I>tsp<I>o</I>t?
            </Title>
            <Paragraph>
              Überprüfe jetzt anhand der RKI Daten, ob dein aktueller Standort ein <Nobr>Covid‑19</Nobr> Hotspot ist.
            </Paragraph>
            <Button onClick={request} isError={error} isIdle={isIdle} disabled={isIdle || error}>{isIdle ? 'Standort angefragt...' : (error ? 'Standortabfrage nicht erfolgreich' : 'Überprüfen')}</Button>
          </Container>
        </Section>
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
  max-width: 900px;
  width: 100%;
`

const Image = styled.img`
  margin-bottom: 40px;
  width: 125px;
`

const Button = styled.button`
  background: ${props => props.isIdle ? '#333' : (props.isError ? '#FF0000' : '#0071e3')};
  border: none;
  border-radius: 22px;
  color: white;
  font-size: 1.3rem;
  font-weight: 400;
  padding: 13px 25px;
`
