import { localMeasures } from './local-measures'

export const useLocalMeasure = (area) => {
  const localMeasure = localMeasures[area]

  if (!localMeasure) {
    return null
  }

  return localMeasure
}
