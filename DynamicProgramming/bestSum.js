const bestSum = (targetSum, numbers, memo = {}) => {
    if(memo[targetSum]) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const reminder = targetSum - num;
        const reminderCombination = bestSum(reminder, numbers, memo);

        if (reminderCombination != null) {
            const combination = [...reminderCombination, num];

            if (shortestCombination === null || combination.length < shortestCombination.length)
                shortestCombination = combination;
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
};

let m = new Map();

m.set(1,1);
m.has()


console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));