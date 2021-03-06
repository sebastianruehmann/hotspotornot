import { createGlobalStyle } from 'styled-components'
import { cssReset } from './css-reset'

export const GlobalStyle = createGlobalStyle`
  ${cssReset};

  html,
  body {
    line-height: 1.3;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }
  
  :root {
    font-size: 17px;
  }
  
  @media only screen and (max-width: 640px) {
    :root {
      font-size: 14px;
    }
  }
  
  a {
    color: #0071e3;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
  
  h1 {
    font-size: 2.8rem;
    font-weight: bold;
    line-height: 3.2rem;
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  
  h4 {
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
  }
  
  strong {
    font-weight: bold;
  }
  
  p {
    margin-bottom: 2rem;
  }


`
