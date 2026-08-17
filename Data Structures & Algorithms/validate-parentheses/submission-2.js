class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length == 0 || s.length % 2 !== 0) {
            return false;
        }
        let stack = [];
        let counter = 0;
        let parenthesisPair = {
            "]": "[",
            "}": "{",
            ")": "("
        }
        let openParenthesis = ["(", "{", "["];

        while (counter < s.length) {
            let topElement = s[counter];
            if (openParenthesis.includes(topElement)) {
                stack.push(topElement);
                counter++;
            }
            else {
                if (parenthesisPair[topElement] !== stack[stack.length - 1]) {
                    return false;
                }
                else {
                    stack.pop();
                    counter++;
                }
            }
        }

        return stack.length === 0;

    }
}
