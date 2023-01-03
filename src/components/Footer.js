import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Section } from './Section'

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
  text-align: center;
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
        <Link href="/datenschutz">
          <a>Datenschutz</a>
        </Link>
      </Item>
      <Right>
        Die Köpfe hinter "Hotspot or not?"{' '}
        <a target="_blank" href="https://seb.astian.eu">
          Sebastian
        </a>
        ,{' '}
        Julian und{' '}
        <a target="_blank" href="https://jonas.re">
          Jonas
        </a>
      </Right>
    </FooterWrapper>
  )
}
