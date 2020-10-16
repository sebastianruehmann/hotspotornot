import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import {useQuery} from 'react-query'
import {useEffect, useState} from 'react'
import {usePosition} from '../hooks/usePosition'
import {Section, Main, Title, Paragraph, Image} from '../components/Layout'
import {Accordion} from '../components/Accordion'
import {search} from '../services/Api'
import Header from '../components/Header'
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
        <Header>
          <Image src="/corona.jpg" />
          <GreyTitle>
            Bin ich in einem <Nobr>Covid-19</Nobr> H<I>o</I>tsp<I>o</I>t?
          </GreyTitle>
          <Paragraph>
            Überprüfe jetzt anhand der RKI Daten, ob dein aktueller Standort ein <Nobr>Covid‑19</Nobr> Hotspot ist.
          </Paragraph>
          <Actions>
            <LocationButton />
            <AddressForm />
          </Actions>
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
  color: #ff0000;
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
