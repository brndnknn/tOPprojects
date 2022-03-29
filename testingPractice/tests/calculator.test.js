import calculator from "../code/calculator";

test('add', () => {
    expect(calculator.add(2,7)).toBe(9);
});

test('subtract', () => {
    expect(calculator.subtract(2,7)).toBe(-5);
});

test('divide', () => {
    expect(calculator.divide(7,2)).toBe(3.5);
});

test('multiply ', () => {
    expect(calculator.multiply(7,2)).toBe(14);
});