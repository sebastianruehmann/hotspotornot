import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'
import { usePosition } from '../hooks/usePosition'
import { Section, Main, Title, Paragraph, Image } from '../components/Layout'
import { Accordion } from '../components/Accordion'
import { search } from '../services/Api'
import Header from '../components/Header'
import { LocationButton } from '../components/LocationButton'
import { AddressForm } from '../components/AddressForm'
import CoronaIcon from '../components/assets/coronavirus'

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
          <Title>FAQ</Title>
          <Accordion
            itemId="function"
            label="Wie funktioniert “Hotspot or not?”"
          >
            "Hotspot or not?" zeigt Ihnen, ob Sie sich in einem Covid-19 Hotspot
            befinden. Sie können Ihren aktuellen Standort nutzen oder nach einer
            Stadt suchen. Diese Position wird mit den aktuellen Daten Covid-19
            Infektionszahlen des Robert Koch Instituts abgeglichen. "Hotspot or
            not?" berechnet, ob Ihr Landkreis nach den Beschlüssen der
            Landtagssitzung ein Covid-19 Hotspot ist.
          </Accordion>
          <Accordion
            itemId="location"
            label="Wofür nutzt “Hotspot or not?” meinen Standort?"
          >
            Sie haben die Option "Hotspot or not?" Ihren Standort freizugeben.
            Anhand Ihres Standort werden die aktuellen Covid-19 Infektionszahlen
            in Ihrem Landkreis abgerufen.
          </Accordion>
          <Accordion
            itemId="privacy"
            label="Welche persönliche Daten werden gespeichert?"
          >
            "Hotspot or not?" speichert keine persönlichen Daten und nutzt keine
            Cookies.
          </Accordion>
          <Accordion itemId="hotspot" label="Was ist ein COVID-19 Hotspot?">
            Ein Landkreis mit einem Covid-19 Inzidenzwert über 35 wird als
            Covid-19 Hotspot verstanden. Ein Covid-19 Inzidenzwert über 50 wird
            als kritischer Covid-19 Hotspot verstanden.
          </Accordion>
          <Accordion
            itemId="uptodate"
            label="Sind die Ergebnisse von “Hotspot or not?” aktuell?"
          >
            "Hotspot or not?" gleicht Ihren Standort stets mit dem aktuellsten
            Covid-19 Infektionszahlen des Robert-Koch Instituts ab.
          </Accordion>
          <Accordion
            itemId="support"
            label="Ich habe ein Problem. Wo kann ich mich melden?"
          >
            Bei Problemen, Fragen oder Anmerkungen wenden Sie sich bitte an{' '}
            <a href="mailto:service@hotspotornot.de">service@hotspotornot.de</a>
          </Accordion>
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
