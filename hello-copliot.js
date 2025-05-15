// PercentageCalculator class provides utility methods for percentage calculations
class PercentageCalculator {
    // Calculates what percent 'a' is of 'b'
    // If process.env.B_VALUE is set, uses its value as 'b'
    percentOf(a, b) {
        const b = process.env.B_VALUE ? Number(process.env.B_VALUE) : b;
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return (a / b) * 100;
    }

    // Calculates the value that is 'percent' percent of 'number'
    percentValue(percent, number) {
        return (percent / 100) * number;
    }

    // Increases 'number' by 'percent' percent
    increaseByPercent(number, percent) {
        return number + this.percentValue(percent, number);
    }

    // Decreases 'number' by 'percent' percent
    decreaseByPercent(number, percent) {
        return number - this.percentValue(percent, number);
    }
}
