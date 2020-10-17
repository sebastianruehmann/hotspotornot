import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Section, Main, Title, Paragraph } from '../components/Layout'
import Header from '../components/Header'
import { LocationButton } from '../components/LocationButton'
import { AddressForm } from '../components/AddressForm'
import CoronaIcon from '../components/assets/coronavirus'
import { FAQ } from '../components/FAQ'

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

      <Main>
        <Header>
          <RedCoronaIcon />
          <GreyTitle>
            Bin ich in einem <Nobr>Covid-19</Nobr> H<I>o</I>tsp<I>o</I>t?
          </GreyTitle>
          <Paragraph>
            Überprüfe jetzt anhand der RKI Daten, ob dein aktueller Standort ein{' '}
            <Nobr>Covid‑19</Nobr> Hotspot ist.
          </Paragraph>
          <Actions>
            <LocationButton />
            <AddressForm />
          </Actions>
        </Header>
        <Section wrapped>
          <FAQ />
        </Section>
      </Main>
    </>
  )
}

const RedCoronaIcon = styled(CoronaIcon)`
  height: auto;
  margin-bottom: 40px;
  width: 125px;

  & .body {
    fill: #d73d34;
  }
  & .circles {
    fill: #ad3129;
  }
`

const GreyTitle = styled(Title)`
  color: #1d1d1f;
`

const I = styled.i`
  color: #d73d34;
`

const Nobr = styled.span`
  white-space: nowrap;
`

const Button = styled.button`
  background: ${(props) =>
    props.isIdle ? '#333' : props.isError ? '#FF0000' : '#0071e3'};
  border: none;
  border-radius: 22px;
  color: white;
  font-size: 1.3rem;
  font-weight: 400;
  padding: 13px 25px;
`
