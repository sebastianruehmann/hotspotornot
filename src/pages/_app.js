import React from 'react'
import Head from 'next/head'

import { GlobalStyle } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Überprüfe jetzt anhand der RKI Daten, ob dein aktueller Standort ein Covid‑19 Hotspot ist."
        />
        <meta property="og:title" content="Bin ich in einem Hotspot?" />
        <meta
          property="og:description"
          content="Überprüfe jetzt anhand der RKI Daten, ob dein aktueller Standort ein Covid‑19 Hotspot ist."
        />
        <meta
          property="og:image"
          content="https://hotspotornot.de/thumbnail.jpg"
        />
        <meta property="og:url" content="https://hotspotornot.de" />
        <meta name="twitter:title" content="Bin ich in einem Hotspot?" />
        <meta
          name="twitter:description"
          content="Überprüfe jetzt anhand der RKI Daten, ob dein aktueller Standort ein Covid‑19 Hotspot ist."
        />
        <meta
          name="twitter:image"
          content="https://hotspotornot.de/thumbnail.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          async
          defer
          data-domain="hotspotornot.de"
          src="https://plausible.io/js/plausible.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }',
          }}
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
