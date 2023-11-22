const { checkNumber, getGrade } = require('./conditionals');

test('Check if number1 is greater than number2', () => {
  expect(checkNumber(10, 5)).toBe(true);
  expect(checkNumber(5, 10)).toBe(false);
  expect(checkNumber(5, 5)).toBe(false);
});

test('Get grade based on score', () => {
  expect(getGrade(95)).toBe('A');
  expect(getGrade(85)).toBe('B');
  expect(getGrade(75)).toBe('C');
  expect(getGrade(65)).toBe('D');
  expect(getGrade(55)).toBe('F');
});