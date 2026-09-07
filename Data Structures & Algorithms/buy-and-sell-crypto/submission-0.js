class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let left = 0;
        let right = 1;

        while(right<prices.length){
            //valid window
            if(prices[right]>prices[left]){
                let difference = (prices[right]-prices[left])
                profit = profit < difference? difference: profit
            }
            //invalid window
            else{
                left = right;
            }

            right++;
        }

        return profit
    }
}
