const canSum = (targetSum, numbers, memo = {}) => {
    if(memo[targetSum]) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    let result = false;
    for (const n of numbers) {
        const rest = targetSum - n;
        if(canSum(rest, numbers, memo)){
            memo[targetSum] = true;
            return true;
        }
    }
    return result;
};


 console.log(canSum(300, [5,14]));
//console.log(canSum(5, [2,3]));


