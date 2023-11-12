const gridTraveler = (n, m, memo = {}) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    if (memo[`${n},${m}`]) return memo[`${n},${m}`];


    memo[`${n - 1},${m}`] = gridTraveler(n - 1, m, memo);
    memo[`${n},${m - 1}`] = gridTraveler(n, m - 1, memo);

    return memo[`${n - 1},${m}`] + memo[`${n},${m - 1}`] //gridTraveler(n -1, m) + gridTraveler(n, m - 1);
};

console.log(gridTraveler(1, 1)); //1
console.log(gridTraveler(2, 3)); //3
console.log(gridTraveler(3, 2)); //3
console.log(gridTraveler(3, 3)); //6
console.log(gridTraveler(18, 18)); //99999