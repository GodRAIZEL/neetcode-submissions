class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let lower = 0;
        let upper = nums.length - 1;

        while (lower <= upper) {
            let middle = Math.floor((upper + lower) / 2);
            if (nums[middle] === target) {
                return middle;
            }

            //sorted side is on the left
            if (nums[middle] > nums[upper]) {
                //target falls between sorted range
                if (target >= nums[lower] && target <= nums[middle]) {
                    upper = middle - 1;
                }
                //target does not fall between sorted range
                else {
                    lower = middle + 1
                }

            }
            else{
                //target falls between sorted range
                if (target >= nums[middle] && target <= nums[upper]) {
                    lower = middle + 1;
                }
                //target does not fall between sorted range
                else {
                    upper = middle - 1
                }
            }


        }

        return -1

    }
}
