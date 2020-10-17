import '../styles/resets.css'
import '../styles/globals.css'
import styled from 'styled-components'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer>
        <Item>
          <a href="/impressum">Impressum</a>
        </Item>
        <Item>Erstellt von Julian, Sebastian und Jonas</Item>
        <Right>
          <a href="https://experience.arcgis.com/experience/478220a4c454480e823b17327b2bf1d4/page/page_1/">
            <img src="/download.jpeg" width="200" />
          </a>
        </Right>
      </Footer>
    </>
  )
}

const Item = styled.div`
  margin-right: 2rem;
  margin-bottom: 2rem;
`

const Right = styled(Item)`
  margin-left: auto;
  margin-right: 0;
`

export default MyApp
