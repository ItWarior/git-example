class BaseCalculator {
    minus(a, b) {
        return a - b;
    }

    sum(...numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = BaseCalculator;