const getFibSequence = function getFibSequence() {
    const start = 50;
    const limit = 100;
    let result = [0, 1];
    let valLessOrEqualThanLimit = true;

    // generate fibonacci sequence until reaching the limit
    while (valLessOrEqualThanLimit) {
        const nextVal = result[result.length - 1] + result[result.length - 2];
        if (nextVal <= limit) {
            result.push(nextVal);
        } else {
            valLessOrEqualThanLimit = false;
        }
    }

    // next we randomly remove numbers from the array tail
    // can be removed only numbers which are placed after the first number that >= 50
    // we will decide how much those numbers we will delete from tail with random

    let notReachedFirstElemGreaterOrEqualThanStart = true;
    let positionOfFirstElemCanBeRemoved = -1;
    while (notReachedFirstElemGreaterOrEqualThanStart) {
        positionOfFirstElemCanBeRemoved++;
        if (result[positionOfFirstElemCanBeRemoved] >= start) {
            notReachedFirstElemGreaterOrEqualThanStart = false;
            positionOfFirstElemCanBeRemoved++;
        }
    }

    const howManyNumbersCanBeRemoved = result.length - positionOfFirstElemCanBeRemoved;
    const randStart = 0;
    const randEnd = howManyNumbersCanBeRemoved;
    const howManyNumbersWillBeRemoved = Math.floor(
        Math.random() * (randEnd + 0.99 - randStart) + randStart,
    );
    result = result.slice(0, result.length - howManyNumbersWillBeRemoved);
    return result;
};

module.exports.getFibSequence = getFibSequence;
