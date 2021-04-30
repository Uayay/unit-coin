import { unitCoin } from '../src/index'

test('NaN', () => {
  expect(() => {
    unitCoin('NaN')
  }).toThrow('The param type must be a number.')
  expect(() => {
    unitCoin(Number.NaN)
  }).toThrow('The param type must be a number.')
})

test('0.1', () => {
  expect(unitCoin(0.1))
    .toBe('0.1')
})

test('1', () => {
  expect(unitCoin(1))
    .toBe('1')
})

test('999', () => {
  expect(unitCoin(999))
    .toBe('999')
})

test('1.02k', () => {
  expect(unitCoin(1024))
    .toBe('1.02k')
})

test('1.02m', () => {
  expect(unitCoin(1024000))
    .toBe('1.02m')
})

test('1.02b', () => {
  expect(unitCoin(1024000000))
    .toBe('1.02b')
})

test('1.21zz', () => {
  expect(unitCoin(1.21 * 10 ** 90))
    .toBe('1.21zz')
})


