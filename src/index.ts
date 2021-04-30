import { UNITS } from "./constants"
import * as _ from 'lodash-es'

function unit(param: string | number): string {
  const origVal = Number(param)

  if (Number.isNaN(origVal)) {
    throw new Error('The param type must be a number.')
  }

  let transVal = String(origVal)

  if (origVal <= 1) {
    return transVal
  }

  for (let i = 0; i < UNITS.length; i++) {
    const unit = UNITS[i]
    const norms = 10 ** (i * 3)

    if (
      (i === UNITS.length - 1) ||
      (origVal >= norms && origVal < norms * 10 ** 3)
    ) {
      transVal = `${_.floor(origVal / norms, 2)}${unit}`
      return transVal
    }
  }

  return transVal
}

export default {
  unit
}
