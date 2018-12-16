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
}

module.exports = Fibonacci;
