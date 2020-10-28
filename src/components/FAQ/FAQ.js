import React from 'react'
import styled from 'styled-components'
import { Accordion } from '../Accordion'
import { useTranslation } from '../../i18n'

const Stack = styled.div`
  > * {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const FAQ = () => {
  const { t } = useTranslation('faq')
  const questionsAndAnswers = t('faq', { returnObjects: true })

  return (
    <>
      <h2>{t('title')}</h2>
      <Stack>
        {questionsAndAnswers.map((it, index) => (
          <Accordion key={index} itemId={index} label={it.label}>
            <span
              dangerouslySetInnerHTML={{
                __html: it.answer,
              }}
            />
          </Accordion>
        ))}
      </Stack>
    </>
  )
}
