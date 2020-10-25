import React from 'react'
import { useLocalMeasure } from './useLocalMeasure'
import { LocalMeasure } from './LocalMeasure'
import { GeneralLocalMeasures } from './GeneralLocalMeasures'
import { GeneralMeasures } from './GeneralMeasures'

export const Measures = ({ riskLevel, area }) => {
  const localMeasure = useLocalMeasure(area)

  if (localMeasure) {
    return <LocalMeasure area={area} />
  }

  return (
    <>
      <GeneralLocalMeasures />
      <GeneralMeasures riskLevel={riskLevel} />
    </>
  )
}
