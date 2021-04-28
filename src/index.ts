import { UNITS } from "./constants"

function unitCoin() {
  const unitsValue = UNITS.map((item, index) => {
    return [item, 10 ** (index * 3)]
  })
  
  return unitsValue
}

export { unitCoin }
