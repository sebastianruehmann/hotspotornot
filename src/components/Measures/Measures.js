import React from 'react'
import { useLocalMeasure } from './useLocalMeasure'
import { LocalMeasure } from './LocalMeasure'
import { GeneralLocalMeasures } from './GeneralLocalMeasures'
import { GeneralMeasures } from './GeneralMeasures'

export const Measures = ({ riskLevel, area, state }) => {
  const localMeasure = useLocalMeasure(area)

  if (localMeasure) {
    return <LocalMeasure area={area} />
  }

  return (
    <>
      <GeneralLocalMeasures state={state} />
      <GeneralMeasures riskLevel={riskLevel} />
    </>
  )
}
