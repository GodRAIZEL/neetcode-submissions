class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Hashmap = {};
        let s2Hashmap = {};
        let left = 0;
        let right = 0;
        let matches = 0;

        for (let i = 0; i < s1.length; i++) {
            s1Hashmap[s1[i]] = (s1Hashmap[s1[i]] || 0) + 1;
        }

        const targetMatches = Object.keys(s1Hashmap).length;

        while (right < s2.length) {

            let rightChar = s2[right];

            s2Hashmap[rightChar] = (s2Hashmap[rightChar] || 0) + 1;

            if (s1Hashmap[rightChar] === s2Hashmap[rightChar]) {
                matches++;
            }
            else if (s1Hashmap[rightChar] + 1 === s2Hashmap[rightChar]) {
                matches--;
            }

            let leftChar = s2[left];

            if (right - left + 1 > s1.length) {
                if (s1Hashmap[leftChar] + 1 === s2Hashmap[leftChar]) {
                    matches++;
                }
                else if (s1Hashmap[leftChar] === s2Hashmap[leftChar]) {
                    matches--;
                }
                s2Hashmap[leftChar]--;
                left++;
            }


            if (matches === targetMatches) {
                return true;
            }

            right++;

        }


        return false;
    }
}
