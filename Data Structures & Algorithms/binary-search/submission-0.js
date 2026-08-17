class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let lower = 0;
        let upper = nums.length-1;
        while(lower<=upper){
            let middle = Math.floor((upper + lower)/2);
            if(nums[middle] === target){
                return middle;
            }
            else if(nums[middle] < target){
                lower = middle+1;
            }
            else if(nums[middle] > target){
                upper = middle-1;
            }

        }

        return -1;
    }
}
