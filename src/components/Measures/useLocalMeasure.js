import { useContext } from 'react'
import { I18nContext } from 'next-i18next'

import { localMeasures } from './local-measures'

export const useLocalMeasure = (area) => {
  const localMeasure = localMeasures[area]
  const {
    i18n: { language },
  } = useContext(I18nContext)

  if (!localMeasure) {
    return null
  }

  return {
    title: localMeasure.title[language],
    url: localMeasure.url,
  }
}
