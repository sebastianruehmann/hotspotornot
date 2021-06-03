import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Adsense } from '@ctrl/react-adsense'

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
          <Adsense
            client="ca-pub-7744980260457752"
            slot="9147985605"
            style={{ display: 'block', marginBottom: 40 }}
            format="fluid"
            responsive="true"
            layoutKey="-gw-1+2a-9x+5c"
          />
          <FAQ />
          <Adsense
            client="ca-pub-7744980260457752"
            slot="9147985605"
            style={{ display: 'block', marginTop: 40 }}
            format="fluid"
            responsive="true"
            layoutKey="-gw-1+2a-9x+5c"
          />
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
