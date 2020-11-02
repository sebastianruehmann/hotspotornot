import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { useTranslation, withTranslation } from '../i18n'

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

function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('index.title')}</title>
      </Head>

      <main>
        <Header>
          <h1>{t('index.headline')}</h1>
          <Paragraph>{t('index.subHeadline')}</Paragraph>
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

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'faq'],
})

export default withTranslation('common')(Home)
