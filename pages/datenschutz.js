import React from 'react'
import Head from 'next/head'

import { Section, Main, Title } from '../components/Layout'
import Header from '../components/Header'
import { Footer } from '../components/Footer'

export default function Datenschutz() {
  return (
    <>
      <Head>
        <title>Hotspot or not? - Datenschutz</title>
      </Head>

      <Main>
        <Header>
          <Title>Datenschutz&shy;erklärung</Title>
        </Header>
        <Section>
          <p>
            Die Nutzung unserer Seite ist ohne eine Angabe von personenbezogenen
            Daten möglich. Für die Nutzung einzelner Services unserer Seite
            können sich hierfür abweichende Regelungen ergeben, die in diesem
            Falle nachstehend gesondert erläutert werden. Ihre personenbezogenen
            Daten (z.B. Name, Anschrift, E-Mail, Telefonnummer, u.ä.) werden von
            uns nur gemäß den Bestimmungen des deutschen Datenschutzrechts
            verarbeitet. Daten sind dann personenbezogen, wenn sie eindeutig
            einer bestimmten natürlichen Person zugeordnet werden können. Die
            rechtlichen Grundlagen des Datenschutzes finden Sie im
            Bundesdatenschutzgesetz (BDSG) und dem Telemediengesetz (TMG).
            Nachstehende Regelungen informieren Sie insoweit über die Art, den
            Umfang und Zweck der Erhebung, die Nutzung und die Verarbeitung von
            personenbezogenen Daten durch den Anbieter.
          </p>
          <p>
            Sebastian, Rühmann
            <br />
            Franz-Künstler Str. 23
            <br />
            10969 Berlin
            <br />
            Telefon: +49 151 7288 48 44
            <br />
            E-Mail:{' '}
            <a href="mailto:service@hotspotornot.de">service@hotspotornot.de</a>
          </p>
          <p>
            Wir weisen darauf hin, dass die internetbasierte Datenübertragung
            Sicherheitslücken aufweist, ein lückenloser Schutz vor Zugriffen
            durch Dritte somit unmöglich ist.
          </p>
          <h3>Serverdaten</h3>
          <p>
            Aus technischen Gründen werden u.a. folgende Daten, die Ihr
            Internet-Browser an uns bzw. an unseren Webspace-Provider
            übermittelt, erfasst (sogenannte Serverlogfiles):
          </p>
          <ul>
            <li>- Browsertyp und -version</li>
            <li>- verwendetes Betriebssystem</li>
            <li>- Webseite, von der aus Sie uns besuchen (Referrer URL)</li>
            <li>- Webseite, die Sie besuchen</li>
            <li>- Datum und Uhrzeit Ihres Zugriffs</li>
            <li>- Ihre Internet Protokoll (IP)-Adresse.</li>
          </ul>
          <br />
          <p>
            Diese anonymen Daten werden getrennt von Ihren eventuell angegebenen
            personenbezogenen Daten gespeichert und lassen so keine Rückschlüsse
            auf eine bestimmte Person zu. Sie werden zu statistischen Zwecken
            ausgewertet, um unseren Internetauftritt und unsere Angebote
            optimieren zu können.
          </p>
          <h3>Kontaktmöglichkeit</h3>
          <p>
            Wir bieten Ihnen auf unserer Seite die Möglichkeit, mit uns per
            E-Mail und/oder über ein Kontaktformular in Verbindung zu treten. In
            diesem Fall werden die vom Nutzer gemachten Angaben zum Zwecke der
            Bearbeitung seiner Kontaktaufnahme gespeichert. Eine Weitergabe an
            Dritte erfolgt nicht. Ein Abgleich der so erhobenen Daten mit Daten,
            die möglicherweise durch andere Komponenten unserer Seite erhoben
            werden, erfolgt ebenfalls nicht.
          </p>
        </Section>
      </Main>

      <Footer />
    </>
  )
}
