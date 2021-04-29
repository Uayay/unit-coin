import { unitCoin } from '../src'

test('NaN', () => {
  expect(unitCoin('NaN')).toEqual({ error: 'The param type must be a number.' });
});
