import React from 'react'
import styled from 'styled-components'
import { Accordion } from './Accordion'

const questionAndAnswers = [
  {
    id: 'function',
    label: 'Wie funktioniert “Hotspot or not?”',
    answer:
      '"Hotspot or not?" zeigen dir, ob Du dich in einem Covid-19 Hotspot befindest. Du kannst Deinen aktuellen Standort nutzen oder nach einer Stadt suchen. Diese Position wird mit den aktuellen Covid-19 Infektionszahlen des Robert Koch Instituts abgeglichen. "Hotspot or not?" berechnet, ob Dein Landkreis nach den Beschlüssen der Landtagssitzung ein Covid-19 Hotspot ist.',
  },
  {
    id: 'location',
    label: 'Wofür nutzt “Hotspot or not?” meinen Standort?',
    answer:
      'Du hast die Option "Hotspot or not?" Deinen Standort freizugeben. Anhand Deines Standort wird die aktuelle 7-Tage-Inzidenz mit Covid-19 Infizierten in Deinem Landkreis abgerufen.',
  },
  {
    id: 'privacy',
    label: 'Welche persönliche Daten werden gespeichert?',
    answer:
      '"Hotspot or not?" speichert keine persönlichen Daten und nutzt keine Cookies.',
  },
  {
    id: 'hotspot',
    label: 'Was ist ein COVID-19 Hotspot?',
    answer:
      'Ein Landkreis mit einem Covid-19 Inzidenzwert über 35 wird als Covid-19 Hotspot verstanden. Ein Covid-19 Inzidenzwert über 50 wird als kritischer Covid-19 Hotspot verstanden.',
  },
  {
    id: 'uptodate',
    label: 'Sind die Ergebnisse von “Hotspot or not?” aktuell?',
    answer:
      '"Hotspot or not?" ruft stets den aktuellen Covid-19 Inzidenzwert des RKI für Deinen Standort ab. In Ausnahmefällen kann die von Deinem Landkreis gemeldete Inzidenzzahl jedoch aktueller sein. Die unterschiedlichen Zahlen sind dann in der Regel auf einen Meldeverzug beim RKI zurückzuführen.',
  },
  {
    id: 'differentincidencevalue',
    label:
      'Warum kann der Inzidenzwert von "Hotspot or not?" von dem meines örtlichen Gesundheitsamtes abweichen?',
    answer:
      'Bei der Übermittlung der Fälle von den Gesundheitsämtern über die zuständigen Landesbehörden bis ans RKI kann es zu einem Melde- und Übermittlungsverzug von einigen Tagen kommen.',
  },
  {
    id: 'incidencevalue',
    label: 'Was ist der Inzidenzwert?',
    answer:
      'Der Inzidenzwert ist die Maßzahl dafür, wie viele von 100.000 Einwohnern innerhalb von 7 Tagen an Covid-19 erkrankt sind.',
  },
]

const Stack = styled.div`
  > * {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const FAQ = () => {
  return (
    <>
      <h2>FAQ</h2>
      <Stack>
        {questionAndAnswers.map((it) => (
          <Accordion key={it.id} itemId={it.id} label={it.label}>
            {it.answer}
          </Accordion>
        ))}

        <Accordion
          itemId="support"
          label="Ich habe ein Problem. Wo kann ich mich melden?"
        >
          Bei Problemen, Fragen oder Anmerkungen wenden Sie sich bitte an{' '}
          <a href="mailto:service@hotspotornot.de">service@hotspotornot.de</a>
        </Accordion>
      </Stack>
    </>
  )
}
