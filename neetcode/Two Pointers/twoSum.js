var twoSum = function(numbers, target) {
    
    if (numbers.length == 2) return [1, 2];

    let l = 0, r = numbers.length - 1;

    while (l < r) {
        if (numbers[r] >= target) {
            r--;
            continue;
        }

        if ((numbers[l] + numbers[r]) == target) {
            return [l + 1, r + 1];
        }

        l++;
        if (l == r) {
            l = 0;
            r--;
        }
    }

    return [];
};

// console.log(twoSum([2,7,11,15],9));
// console.log(twoSum([2,3,4],6));
console.log(twoSum([0,0,3,4],0) );