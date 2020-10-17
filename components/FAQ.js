import React from 'react'
import styled from 'styled-components'
import { Title } from './Layout'
import { Accordion } from './Accordion'

const questionAndAnswers = [
  {
    id: 'function',
    label: 'Wie funktioniert “Hotspot or not?”',
    answer:
      '"Hotspot or not?" zeigt Ihnen, ob Sie sich in einem Covid-19 Hotspot befinden. Sie können Ihren aktuellen Standort nutzen oder nach einer Stadt suchen. Diese Position wird mit den aktuellen Daten Covid-19 Infektionszahlen des Robert Koch Instituts abgeglichen. "Hotspot or not?" berechnet, ob Ihr Landkreis nach den Beschlüssen der Landtagssitzung ein Covid-19 Hotspot ist.',
  },
  {
    id: 'location',
    label: 'Wofür nutzt “Hotspot or not?” meinen Standort?',
    answer:
      'Sie haben die Option "Hotspot or not?" Ihren Standort freizugeben. Anhand Ihres Standort werden die aktuellen Covid-19 Infektionszahlen in Ihrem Landkreis abgerufen.',
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
      '"Hotspot or not?" gleicht Ihren Standort stets mit dem aktuellsten Covid-19 Infektionszahlen des Robert-Koch Instituts ab.',
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
      <Title>FAQ</Title>
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
