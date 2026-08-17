class MinStack {
    constructor() {
        this.stack = [];
        this.counter = 0;
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack[this.counter] = val;
        this.counter++;
        if(this.minStack.length === 0){
            this.minStack.push(val);
        }
        else if(val <= this.minStack[this.minStack.length-1]){
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.counter === 0){
            return "Stack is empty";
        }
        this.counter--;

        let removedVal = this.stack[this.counter];

        this.stack.pop();

        if(removedVal === this.minStack[this.minStack.length-1]){
            this.minStack.pop();
        }

    }

    /**
     * @return {number}
     */
    top() {
        if(this.counter === 0){
            return undefined
        }
        return this.stack[this.counter-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        if(this.minStack.length === 0){
            return undefined;
        }

        return this.minStack[this.minStack.length-1]
    }
}
