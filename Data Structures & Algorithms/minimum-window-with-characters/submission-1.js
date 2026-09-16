class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let targetHashMap = {};
        let sHashMap = {};
        let matches = 0;
        let left = 0;
        let right = 0;
        let outputString = "";

        for (let char of t) {
            targetHashMap[char] = (targetHashMap[char] || 0) + 1;
        }

        const targetMatch = Object.keys(targetHashMap).length;

        while (right < s.length) {
            let rightChar = s[right];

            sHashMap[rightChar] = (sHashMap[rightChar] || 0) + 1;

            if (targetHashMap[rightChar] === sHashMap[rightChar]) {
                matches++;
            }

            if (matches === targetMatch && outputString === "") {
                outputString = s.slice(left, right + 1);
            }

            while (matches === targetMatch) {
                let leftChar = s[left];
                if (outputString.length > right - left + 1) {
                    outputString = s.slice(left, right + 1);
                }

                if (targetHashMap[leftChar] === sHashMap[leftChar]) {
                    matches--;
                }

                sHashMap[leftChar]--;
                left++
            }

            right++;
        }

        return outputString;

    }
}
