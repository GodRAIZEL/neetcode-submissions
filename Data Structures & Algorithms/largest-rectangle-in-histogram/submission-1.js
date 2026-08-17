class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let maxArea = null;

        for (let i = 0; i < heights.length; i++) {
            let lastPoppedIndex = null;

            while (stack.length > 0 && heights[i] < stack[stack.length - 1].value) {
                let stackLast = stack.pop();
                lastPoppedIndex = stackLast.index
                let currentArea = (i - stackLast.index) * stackLast.value;
                if (currentArea > maxArea || maxArea === null) {
                    maxArea = currentArea;
                }
            }

            stack.push({ value: heights[i], index: lastPoppedIndex === null ? i : lastPoppedIndex });
        }


        while (stack.length > 0) {
            let currentArea = null;
            let stackLast = stack.pop();
            currentArea = (heights.length - stackLast.index) * stackLast.value;
            if (currentArea > maxArea || maxArea === null) {
                maxArea = currentArea;
            }
        }


        return maxArea;
    }
}
