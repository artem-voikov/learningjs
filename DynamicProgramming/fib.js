
const fib = (n, memo = {}) => {
    if (n <= 2) return 1;
    if (memo[n]) return memo[n];

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    return memo[n];
}


console.log(fib(2));
console.log(fib(4));
console.log(fib(6));
console.log(fib(8));
console.log(fib(10));
console.log(fib(53));