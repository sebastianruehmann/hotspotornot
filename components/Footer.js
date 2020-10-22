import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Section } from './Layout'

const Wrapper = styled(Section)`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

function FooterWrapper({ children }) {
  return (
    <Wrapper as="footer" wrapped>
      {children}
    </Wrapper>
  )
}

const Item = styled.div`
  font-weight: 500;
  margin-right: 2rem;
  margin-bottom: 2rem;
`

const Right = styled(Item)`
  margin-left: auto;
  margin-right: 0;
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <Item>
        <Link href="/impressum">
          <a>Impressum</a>
        </Link>
      </Item>
      <Item>
        Die Köpfe dahinter{' '}
        <a target="_blank" href="https://seb.astian.eu">
          Sebastian
        </a>
        ,{' '}
        <a target="_blank" href="https://julianblohm.vercel.app">
          Julian
        </a>{' '}
        und{' '}
        <a target="_blank" href="https://jonas.re">
          Jonas
        </a>
      </Item>
      <Right>
        <span>Daten bereitgestellt von: </span>
        <a
          target="_blank"
          href="https://experience.arcgis.com/experience/478220a4c454480e823b17327b2bf1d4/page/page_1/"
        >
          <img src="/robert-koch-institut.jpeg" width="200" />
        </a>
      </Right>
    </FooterWrapper>
  )
}
