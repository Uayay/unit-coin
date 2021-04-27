import { UNITS } from "./constants"

function unitCoin() {
  const unitsValue = UNITS.map((item, index) => {
    return [item, 10 ** index]
  })

  return unitsValue
}

export { unitCoin }
