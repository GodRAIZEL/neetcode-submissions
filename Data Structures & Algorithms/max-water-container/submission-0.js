class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let startPointer = 0;
        let endPointer = heights.length - 1;
        let max = 0;

        while (startPointer < endPointer) {
            let currentMax = (endPointer - startPointer) * Math.min(heights[startPointer], heights[endPointer]);
            max = currentMax > max ? currentMax : max;
            if (heights[startPointer] === heights[endPointer]) {
                startPointer++;
            }
            else if (heights[startPointer] > heights[endPointer]) {
                endPointer--;
            }
            else if (heights[endPointer] > heights[startPointer]) {
                startPointer++;
            }

        }

        return max;


    }
}
