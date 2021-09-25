class BaseCalculator {
    minus(a, b) {
        return a - b;
    }

    sumMultiple(...numbers) {
        if (numbers.length > 0) {
            console.log(`Trying to calculate a sum for ${numbers.concat(',')} numbers`);
            return numbers.reduce((sum, num) => sum + num, 0);
        } else {
            console.log('Numbers are missing, returning zero');
            return 0
        }
    }
}

module.exports = BaseCalculator;