import { measures } from './measures'

export const useLocalMeasures = (incidence) => {
  const rulesToReturn = []

  measures.forEach((rule) => {
    if (!rule.variants) {
      rulesToReturn.push(rule)
      return
    }
    rule.variants.forEach((variant) => {
      if (
        incidence >= variant.minIncidence &&
        incidence <= variant.maxIncidence
      ) {
        rulesToReturn.push({
          title: rule.title,
          description: variant.description,
        })
      }
    })
  })
  return rulesToReturn
}
