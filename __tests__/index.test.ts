import unitCoin from '../src'

test('NaN', () => {
  expect(() => {
    unitCoin.unit('NaN')
  }).toThrow('The param type must be a number.')
})

test('0.1 to 0.1', () => {
  expect(unitCoin.unit(0.1))
    .toBe('0.1')
})

test('1 to 1', () => {
  expect(unitCoin.unit(1))
    .toBe('1')
})

test('999 to 999', () => {
  expect(unitCoin.unit(999))
    .toBe('999')
})

test('1024 to 1.02k', () => {
  expect(unitCoin.unit(1024))
    .toBe('1.02k')
})

test('1024000 to 1.02m', () => {
  expect(unitCoin.unit(1024000))
    .toBe('1.02m')
})
