var twoSum = function(nums, target) {
    let followUp = [];

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        
            let dif = target - element;
            if( followUp[dif] !== undefined)
                return [followUp[dif], index];

        
        followUp[element] = index;   
    }

    return null;

    // const find = (nums, target, result) =>{
    //     if(!nums) return null;
    //     if(nums.length == 0 ) return 0;



    // };

};

console.log(twoSum([-3,4,3,90], 0)); //[0, 1]
console.log(twoSum([2,7,11,15], 9)); //[0, 1]
console.log(twoSum([3,2,4], 6)); //[1,2]
console.log(twoSum([3,3], 6)); //[0,1]