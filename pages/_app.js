import '../styles/resets.css'
import '../styles/globals.css'
import Link from 'next/link'
import styled from 'styled-components'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer>
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
      </Footer>
    </>
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

export default MyApp
