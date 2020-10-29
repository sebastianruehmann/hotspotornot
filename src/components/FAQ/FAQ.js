import React from 'react'
import styled from 'styled-components'
import { Accordion } from '../Accordion'
import { questionAndAnswers } from './questionAndAnswers'

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
