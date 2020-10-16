import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import {useMutation} from 'react-query';
import {useEffect, useState} from 'react'
import {usePosition} from '../hooks/usePosition'
import {Section, Main, Title, Paragraph} from '../components/Layout'
import {getCoordinatesByAddress} from '../services/Geocoding';
import { Input } from '../components/Input';
import {LocationButton} from '../components/LocationButton';

const AddressForm = () => {
  const router = useRouter()
  const [address, setAddress] = useState('');
  const [getCoordinates] = useMutation(getCoordinatesByAddress);

  const onSubmit = async event => {
    event.preventDefault();

    // TODO: handle errors properly.
    try {
      const coordinates = await getCoordinates(address);
      router.push((`/${coordinates.lng}/${coordinates.lat}`))
    } catch (e) {

    }
  }

  return (
      <form onSubmit={onSubmit}>
        <Input onChange={event => setAddress(event.target.value)} value={address} placeholder="Enter a city" />
      </form>
  )
}

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
              Überprüfe jetzt anhand der RKI Daten, ob dein aktueller Standort ein <Nobr>Covid‑19</Nobr> Hotspot ist.
            </Paragraph>
            <LocationButton />

            <AddressForm />

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
