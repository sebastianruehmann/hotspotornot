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

export default function Home() {
  return (
    <>
      <Head>
        <title>Hotspot or not?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header>
          <RedCoronaIcon />
          <GreyTitle>Impressum</GreyTitle>
        </Header>
        <Section wrapped></Section>
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
