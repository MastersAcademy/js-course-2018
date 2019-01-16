/**
 * Generates numbers in the Fibonacci sequence.
 */
class Fibonacci {
    /**
     * @param {number} n
     * @returns The 'n'th number in the Fibonacci sequence.
     */
    generate(n) {
        if (n < 2) {
            return n;
        }

        return this.generate(n - 1) + this.generate(n - 2);
    }

    /**
     * @param {number} lastElement
     * @returns Array Fibonacci sequence.
     */
    generateArray(lastElement) {
        const arrayResult = [];
        for (let i = 0; i < lastElement; i++) {
            arrayResult.push(this.generate(i));
        }
        return arrayResult;
    }

    /**
     * @param {number} maxValue
     * @returns Array Fibonacci sequence.
     */
    gereateArrayToMaxValue(maxValue) {
        const arrayResult = [];
        for (let i = 0; i < maxValue; i++) {
            const value = this.generate(i);
            if (value <= maxValue) {
                arrayResult.push(value);
            } else break;
        }
        return arrayResult;
    }
}

module.exports = Fibonacci;
