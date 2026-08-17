class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

                let numSet = new Set(nums);
        let max = 0;

        for(let num of numSet){
            if(!numSet.has(num-1)){
              let currentMax = 1;
               for(let i = 1; i < numSet.size; i++){
                 if(numSet.has(num+i)){
                   currentMax++;
                 }
                 else{
                 break;
                 }
               }
               max = currentMax>max? currentMax : max;
            }
        }
        
        
        return max ;

    }
}
