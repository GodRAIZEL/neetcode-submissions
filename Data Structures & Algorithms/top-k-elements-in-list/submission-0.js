class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

       let hashMap = {}

       for( let num of nums){

        if(hashMap[num]){
          hashMap[num]++;
        }
        else{
          hashMap[num]=1;
        }
        
       }

     let newSet = new Set( nums.sort((a,b)=>{
        if(hashMap[a] !== hashMap[b]){
            return hashMap[b] - hashMap[a];
        }
        else 
        return a - b;
       }));

       let count = 1;
       let newArr =[];

       for(let value of newSet){
        if(count<=k){
        newArr.push(value);
        count++;
        }
        else
        break;
       }

       return newArr.sort();




    }
}
