class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return s.length === t.length && s.split('').sort().join('') === t.split('').sort().join('');

    }
    
}

