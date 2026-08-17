class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let operators = new Set(["+", "-", "/", "*"]);
        let count = 0;

        while (count < tokens.length) {
            let tokensVal = tokens[count];
            if (!operators.has(tokensVal)) {
                stack.push(tokensVal);
                count++;
            }
            else {
                let evaluation = null;
                let lastVal = Number(stack.pop());
                let secondLastVal = Number(stack.pop());

                if(tokensVal === "/"){
                   evaluation = Math.trunc(secondLastVal / lastVal);
                }
                else if(tokensVal === "*"){
                    evaluation = secondLastVal * lastVal
                }
                else if(tokensVal === "+"){
                    evaluation = secondLastVal + lastVal
                }
                else if(tokensVal === "-"){
                    evaluation = secondLastVal - lastVal
                }

                stack.push(evaluation);
                count++
            }
        }

        return parseInt(stack.pop());
    }
}
