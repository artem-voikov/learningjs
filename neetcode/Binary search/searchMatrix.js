/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let search = (nums, target) => {
        if(!nums || nums.length == 0) return -1;
        if(nums.length == 1) return nums[0] == target ? 0 : -1;
        
        let l = 0, r = nums.length;

        while (l <= r) {
            if(l == r) return nums[l] == target ? l : -1;

            index = l + Math.floor((r - l + 1) / 2);
        
            if (nums[index] == target)
                return index;

            if (target >= nums[index]) {
                l = index;        
            }
            else {
                r = index - 1;
            }
        }

        return -1;
    };

    for (let index = 0; index < matrix.length; index++) {
        const row = matrix[index];
        
        if(search(row, target) != -1)
            return true;
    }

    return false;
};

//console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));
//console.log(searchMatrix([[1]], 1));
//console.log(searchMatrix([[1,3]], 1));
//console.log(searchMatrix([[1,3]], 3));