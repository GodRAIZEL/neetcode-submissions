class TimeMap {
    constructor() {
        this.keyStore = new Map();
        this.keyValTime = {}
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyValTime[key]) {
            this.keyValTime[key].push([value, timestamp])
        }
        else {
            this.keyValTime[key] = [[value, timestamp]]
        }
    }

    getKeyValTime() {
        return this.keyValTime;
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let lower = 0;
        let upper = null
        let value = null;
        if (this.keyValTime[key]) {
            upper = this.keyValTime[key].length-1
        }
        else {
            return ""
        }

        while (lower <= upper) {
            let middle = Math.floor((upper + lower) / 2);
            let middleTimeVal = this.keyValTime[key][middle][1]
            if (middleTimeVal === timestamp) {
                return this.keyValTime[key][middle][0];
            }
            else if(middleTimeVal > timestamp){
                upper = middle - 1
            }
            else{
                value = middle;
                lower = middle + 1
            }
        }


        if(value === null){
            return ""
        }else{
            return this.keyValTime[key][value][0]
        }
    }
}