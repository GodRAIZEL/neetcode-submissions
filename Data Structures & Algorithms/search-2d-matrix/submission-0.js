class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let nums = matrix.flat()
        let lower = 0;
        let upper = nums.length-1;
        while(lower<=upper){
            let middle = Math.floor((upper + lower)/2);
            if(nums[middle] === target){
                return true;
            }
            else if(nums[middle] < target){
                lower = middle+1;
            }
            else if(nums[middle] > target){
                upper = middle-1;
            }

        }

        return false;
    }
}
