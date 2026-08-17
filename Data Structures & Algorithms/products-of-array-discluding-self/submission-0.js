class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let preffix = [];
  let start = 1;
  for(let i=0;i<nums.length;i++){
   if(i>0){
   start *= nums[i-1];
   preffix.push(start);
   }
   else{
   preffix.push(start);
   }
  }

  console.log(preffix);

  start = 1;
  for(let i=nums.length-1 ; i>=0 ; i--){

    if(i<nums.length-1){
      start *= nums[i+1];
      preffix[i] = start * preffix[i];
    }
    else
    preffix[i] = start*preffix[i];

  }

  return preffix;
    }
}
