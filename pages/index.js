import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import {useQuery} from 'react-query'
import {useEffect, useState} from 'react'
import {usePosition} from '../hooks/usePosition'
import {Section, Main, Title, Paragraph, Image} from '../components/Layout'
import {Accordion} from '../components/Accordion'
import {search} from '../services/Api'
import Header from '../components/Header'

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
        <Header>
          <Image src="/corona.jpg" />
          <GreyTitle>
            Bin ich in einem <Nobr>Covid-19</Nobr> H<I>o</I>tsp<I>o</I>t?
          </GreyTitle>
          <Paragraph>
            Überprüfe jetzt anhand der RKI Daten, ob dein aktueller Standort ein <Nobr>Covid‑19</Nobr> Hotspot ist.
          </Paragraph>
          <Button onClick={request} isError={error} isIdle={isIdle} disabled={isIdle || error}>{isIdle ? 'Standort angefragt...' : (error ? 'Standortabfrage nicht erfolgreich' : 'Überprüfen')}</Button>
        </Header>
        <Section>
          <Title>FAQ</Title>
          <Accordion itemId="test" label="Wieso braucht Ihr meinen Standort?">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Accordion>
        </Section>
      </Main>
    </>
  )
}

const GreyTitle = styled(Title)`
  color: #1d1d1f;
`

const I = styled.i`
  color: #FF0000;
`

const Nobr = styled.span`
  white-space: nowrap;
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
