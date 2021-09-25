class BaseCalculator {
    minus(a, b) {
        return a - b;
    }

    sum(a, b) {
        if (a && b) {
            console.log(`Trying to calculate a sum for ${a} and ${b}`);
            return a + b;
        } else {
            console.log('Numbers are missing, returning zero');
            return 0;
        }
    }
}

module.exports = BaseCalculator;