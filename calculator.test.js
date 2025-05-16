/**
 * This script contains unit tests for the calculator functions defined in calculator.js
 * It uses Jest as the testing framework to test the add, subtract, multiply, and divide functions.
 */
const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator', () => {
    describe('add function', () => {
        test('adds 1 + 2 to equal 3', () => {
            expect(add(1, 2)).toBe(3);
        });

        test('adds -1 + 1 to equal 0', () => {
            expect(add(-1, 1)).toBe(0);
        });

        test('adds -1 + -1 to equal -2', () => {
            expect(add(-1, -1)).toBe(-2);
        });
    });

    describe('subtract function', () => {
        test('subtracts 2 - 1 to equal 1', () => {
            expect(subtract(2, 1)).toBe(1);
        });

        test('subtracts 1 - 1 to equal 0', () => {
            expect(subtract(1, 1)).toBe(0);
        });

        test('subtracts -1 - -1 to equal 0', () => {
            expect(subtract(-1, -1)).toBe(0);
        });
    });

    describe('multiply function', () => {
        test('multiplies 2 * 3 to equal 6', () => {
            expect(multiply(2, 3)).toBe(6);
        });

        test('multiplies -1 * 1 to equal -1', () => {
            expect(multiply(-1, 1)).toBe(-1);
        });

        test('multiplies -1 * -1 to equal 1', () => {
            expect(multiply(-1, -1)).toBe(1);
        });
    });

    describe('divide function', () => {
        test('divides 6 / 3 to equal 2', () => {
            expect(divide(6, 3)).toBe(2);
        });

        test('divides -6 / -3 to equal 2', () => {
            expect(divide(-6, -3)).toBe(2);
        });

        test('throws error when dividing by zero', () => {
            expect(() => {
                divide(6, 0);
            }).toThrow('Cannot divide by zero.');
        });
    });
});