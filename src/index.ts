import { UNITS } from "./constants"

function unitCoin(param: any): string {
  const origVal = Number(param)

  if (!Number.isNaN(origVal)) {
    throw new Error('The param type must be a number.')
  }

  let transVal = ''

  for (let i = 0; i < UNITS.length; i++) {
    const unit = UNITS[i]
    const norms = 10 ** (i * 3)

    if (
      (i === UNITS.length - 1) ||
      (origVal >= norms && norms < norms * 10 ** 3)
    ) {
      transVal = `${(origVal / norms).toFixed(1)}${unit}`
      return transVal
    }
  }

  return transVal
}

export { unitCoin }
