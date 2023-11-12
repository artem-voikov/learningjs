/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const multiply = (n, pileofnums) => {
        let result = 1;
    
        for (let index = 0; index < pileofnums.length; index++) {
            const element = pileofnums[index];
            if(index != n)
                result *= element;
    
        }
            
        return result;
    };
    
    let m = nums.reduce((map, number, index) => map.set(index,multiply(index, nums)), new Map());
    return [...m.values()];
    
};

console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]

console.log(productExceptSelf([0,0]).join('') == [0,0].join(''));

let arr = [1,2,3,4];


var productExceptSelf2 = function(nums) {
    if(nums.length == 1) return nums;

    let result = [];
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        
        let prefix = index == 0 ? 1 : result[index-1];
        let prev = index == 0 ? 1 : nums[index-1];
        result[index] = prefix * prev;
    }

    let post = 1
    for(let index =nums.length; index != 0; index--){

        let prev = index == nums.length ? 1 : nums[index];
         post = post * prev;

        result[index-1] = result[index-1] * post;
    }

    return result;
};


console.log(productExceptSelf2([1,2,3,4])); // [24,12,8,6]

console.log(productExceptSelf2([0,0]).join('') == [0,0].join(''));


console.log();