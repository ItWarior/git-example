class BaseCalculator {
    minus(a, b) {
        return a - b;
    }

    sumMultiple(...numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = BaseCalculator;