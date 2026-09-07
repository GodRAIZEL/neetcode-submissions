class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let subStringSet = new Set();
        let length = 0;
        let left = 0;
        let right = 0;

        while (right < s.length) {
            //invalid window
            while (subStringSet.has(s[right])) {
                subStringSet.delete(s[left])
                left++
            }

            //valid window
            if (!subStringSet.has(s[right])) {
                subStringSet.add(s[right])
            }

            length = Math.max(length, subStringSet.size);
            right++

        }

        return length
    }
}
