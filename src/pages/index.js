import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import {
  Section,
  Paragraph,
  Header,
  LocationButton,
  AddressForm,
  FAQ,
  Footer,
} from '../components'

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    margin-right: 16px;
    margin-bottom: 16px;

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
      </Head>

      <main>
        <Header>
          <h1>
            Bin ich in einem <Nobr>Covid-19</Nobr> H<I>o</I>tsp<I>o</I>t?
          </h1>
          <Paragraph>
            Überprüfe jetzt anhand der RKI Daten, ob dein aktueller Standort ein{' '}
            <Nobr>Covid‑19</Nobr> Hotspot ist.
          </Paragraph>
          <Actions>
            <LocationButton />
            <AddressForm />
          </Actions>
        </Header>
        <Section>
          <FAQ />
        </Section>
      </main>

      <Footer />
    </>
  )
}

const I = styled.i`
  color: #d73d34;
`

const Nobr = styled.span`
  white-space: nowrap;
`
