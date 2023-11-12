const howSum = (targetNumber, numbers, memo = {}) => {
    if(memo[targetNumber]) return memo[targetNumber];
    if (targetNumber === 0) return [];
    if (targetNumber < 0) return null;

    for (const num of numbers) {
        let rest = targetNumber - num;
        let restResult = howSum(rest, numbers, memo);
        if (restResult){
            memo[targetNumber] = [...restResult, num];
            return memo[targetNumber];
        }
    }

    memo[targetNumber] = null;

    return null;
};

console.log(howSum(7, [7, 3, 4, 7]));
//console.log(howSum(7, [5,6,2]));
//console.log(howSum(7, [2,4]));
//console.log(howSum(13, [4,3]));
//console.log(howSum(250, [7,14]));