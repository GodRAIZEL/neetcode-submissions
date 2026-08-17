class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let pointer1 = i + 1;
        let pointer2 = nums.length - 1;

        if (nums[i] === nums[i - 1]) {
            continue;
        }

        while (pointer1 < pointer2) {
            let sum = nums[i] + nums[pointer1] + nums[pointer2];

            if (sum === 0) {
                result.push([nums[i], nums[pointer1], nums[pointer2]]);
                pointer1++;
                pointer2--;

                while (nums[pointer1] === nums[pointer1 - 1] && pointer1 < nums.length) {
                    pointer1++;
                }
                while (nums[pointer2] === nums[pointer2 + 1] && pointer2 > pointer1) {
                    pointer2--;
                }
            }
            else if (nums[i] + nums[pointer1] + nums[pointer2] > 0) {
                pointer2--;
            }
            else if (nums[i] + nums[pointer1] + nums[pointer2] < 0) {
                pointer1++
            }
        }

    }


    return result;
    }
}
