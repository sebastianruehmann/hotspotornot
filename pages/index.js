import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Section, Main, Title, Paragraph } from '../components/Layout'
import { LocationButton } from '../components/LocationButton'
import { AddressForm } from '../components/AddressForm'

const Actions = styled.div`
  display: flex;
  flex-direction: row;

  > * {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`

export default function Home() {
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
              Überprüfe jetzt anhand der RKI Daten, ob dein aktueller Standort
              ein <Nobr>Covid‑19</Nobr> Hotspot ist.
            </Paragraph>

            <Actions>
              <LocationButton />
              <AddressForm />
            </Actions>
          </Container>
        </Section>
      </Main>
    </>
  )
}

const I = styled.i`
  color: #ff0000;
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
