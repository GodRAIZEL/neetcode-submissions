class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if (nums[0] <= nums[nums.length - 1]) {
            return nums[0]
        }
        let min = nums[0];

        let lower = 0;
        let upper = nums.length - 1;

        while (lower <= upper) {
            let middle = Math.floor((upper + lower) / 2);
            if (nums[middle] >= min) {
                lower = middle + 1;
            }
            else {
                min = nums[middle];
                upper = middle - 1;
            }
        }

        return min
    }
}
