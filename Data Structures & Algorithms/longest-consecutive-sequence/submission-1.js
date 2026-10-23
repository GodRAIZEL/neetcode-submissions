class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let numSet = new Set(nums);
        let max = 0;

        for (let num of numSet) {
            if (!numSet.has(num - 1)) {
                let currentMax = 1;
                let next = num + 1;

                while (numSet.has(next)) {
                    currentMax++;
                    next += 1;
                }

                max = currentMax > max ? currentMax : max;
            }
        }


        return max;

    }
}
