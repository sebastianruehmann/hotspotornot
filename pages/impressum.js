import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
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
        <title>Impressum</title>
      </Head>

      <Main>
        <Header>
          <Link href="/">
            <a>
              <RedCoronaIcon />
            </a>
          </Link>
          <GreyTitle>Impressum</GreyTitle>
        </Header>
        <Section wrapped>
          <p>
            <strong>Angaben gem. § 5 TMG:</strong>
            <br />
            <br />
            Sebastian, Rühmann
            <br />
            Franz-Künstler Str. 23
            <br />
            10969 Berlin
          </p>
          <h2>Kontaktaufnahme</h2>
          <p>
            Telefon: +49 151 7288 48 44
            <br />
            <br />
            E-Mail:{' '}
            <a href="mailto:service@hotspotornot.de">service@hotspotornot.de</a>
          </p>
          <h2>Haftungsausschluss - Disclaimer</h2>
          <h3>Haftung für Inhalte</h3>
          <p>
            Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt
            und nach bestem Gewissen erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
            Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
            für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
            Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
            Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer
            konkreten Rechtsverletzung möglich. Bei Bekanntwerden von den o.g.
            Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.
          </p>
          <h3>Haftungsbeschränkung für externe Links</h3>
          <p>
            Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die
            Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir
            keinen Einfluss. Daher können wir für die „externen Links“ auch
            keine Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte
            der externen Links sind die jeweilige Anbieter oder Betreiber
            (Urheber) der Seiten verantwortlich. Die externen Links wurden zum
            Zeitpunkt der Linksetzung auf eventuelle Rechtsverstöße überprüft
            und waren im Zeitpunkt der Linksetzung frei von rechtswidrigen
            Inhalten. Eine ständige inhaltliche Überprüfung der externen Links
            ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            möglich. Bei direkten oder indirekten Verlinkungen auf die Webseiten
            Dritter, die außerhalb unseres Verantwortungsbereichs liegen, würde
            eine Haftungsverpflichtung ausschließlich in dem Fall nur bestehen,
            wenn wir von den Inhalten Kenntnis erlangen und es uns technisch
            möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger
            Inhalte zu verhindern. Diese Haftungsausschlusserklärung gilt auch
            innerhalb des eigenen Internetauftrittes „Name Ihrer Domain“
            gesetzten Links und Verweise von Fragestellern, Blogeinträgern,
            Gästen des Diskussionsforums. Für illegale, fehlerhafte oder
            unvollständige Inhalte und insbesondere für Schäden, die aus der
            Nutzung oder Nichtnutzung solcherart dargestellten Informationen
            entstehen, haftet allein der Diensteanbieter der Seite, auf welche
            verwiesen wurde, nicht derjenige, der über Links auf die jeweilige
            Veröffentlichung lediglich verweist. Werden uns Rechtsverletzungen
            bekannt, werden die externen Links durch uns unverzüglich entfernt.
          </p>
          <h3>Urheberrecht</h3>
          <p>
            Die auf unserer Webseite veröffentlichen Inhalte und Werke
            unterliegen dem deutschen Urheberrecht (
            <a href="http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf">
              http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf
            </a>
            ) . Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung des geistigen Eigentums in ideeller und materieller Sicht
            des Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der
            vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d.
            Urhebergesetzes (
            <a href="http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf">
              http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf
            </a>
            ). Downloads und Kopien dieser Seite sind nur für den privaten und
            nicht kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer
            Webseite nicht von uns erstellt wurden, sind die Urheberrechte
            Dritter zu beachten. Die Inhalte Dritter werden als solche kenntlich
            gemacht. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
            aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
            Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
            unverzüglich entfernen.
          </p>
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
