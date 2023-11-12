var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    let index = Math.floor(r / 2);
    
    while(l <= r) {
        if(nums[index] == target)
            return index;

        if(l == r)
            break;

        if(target > nums[index]){
            l = index;
            index = l + Math.floor((r - l+1)/2);
        }
        else{
            r = index - 1;
            index = Math.floor(r / 2);
        }
        
        index = l == r ? r : index;
    }
    return -1;
    
};

console.log(search([-1,0,3,5,9,12],9) == 4);
console.log(search([-1,0,3,5,9,12],2) == -1);
console.log(search([-1,0,3,5,9,12],0) == 1);
console.log(search([-1,0,3,5,9,12],3) == 2);
console.log(search([-1,0,5],5) == 2);