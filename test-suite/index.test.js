import hello from '../src/index.js';

test('testing around', () => {
  expect(hello()).toBe('hello mortal');
});
