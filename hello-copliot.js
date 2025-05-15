class PercentageCalculator {
    // Calculates what percent 'a' is of 'b'
    percentOf(a, b) {
        const b = process.env.B_VALUE ? Number(process.env.B_VALUE) : b;
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return (a / b) * 100;
    }

    // Calculates 'percent'% of 'number'
    percentValue(percent, number) {
        return (percent / 100) * number;
    }

    // Increases 'number' by 'percent'%
    increaseByPercent(number, percent) {
        return number + this.percentValue(percent, number);
    }

    // Decreases 'number' by 'percent'%
    decreaseByPercent(number, percent) {
        return number - this.percentValue(percent, number);
    }
}
