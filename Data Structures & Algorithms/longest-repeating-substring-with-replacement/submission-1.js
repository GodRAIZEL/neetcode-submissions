class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let hashMap = {};
        let maxFreq = 0;
        let totalFreq = 0;
        let longestLength = 0;
        let left = 0;
        let right = 0;

        while (right < s.length) {
            hashMap[s[right]] = (hashMap[s[right]] || 0) + 1;
            maxFreq = Math.max(maxFreq, hashMap[s[right]]);
            totalFreq++;

            while (totalFreq - maxFreq > k) {
                hashMap[s[left]]--;
                totalFreq--;
                left++;
            }

            longestLength = Math.max(longestLength, totalFreq);

            right++;
        }
        return longestLength;
    }
}
