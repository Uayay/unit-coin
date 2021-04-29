import { unitCoin } from '../src'

test('NaN', () => {
  expect(() => {
    unitCoin('NaN')
  }).toThrow('The param type must be a number.')
})

test('0.1 to 0.1', () => {
  expect(unitCoin(0.1)).toBe('0.1')
})

test('1 to 1', () => {
  expect(unitCoin(1)).toBe('1')
})

test('999 to 999', () => {
  expect(unitCoin(999)).toBe('999')
})

test('1024 to 1.0k', () => {
  expect(unitCoin(1024)).toBe('1.0k')
})
