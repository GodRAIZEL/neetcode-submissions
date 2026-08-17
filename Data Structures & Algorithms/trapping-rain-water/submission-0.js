class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
         let p1 = 1;
    let p2 = height.length-2;
    let leftHigh = height[0];
    let rightHigh = height[height.length-1];
    let rightHighArr = [];
    let leftHighArr = [];
    let total = 0;

    while(p1<height.length-1){
      
        if(height[p1] >= leftHigh){
            leftHighArr.push(0);
            leftHigh = height[p1];
            p1++;
        }
        else{
            leftHighArr.push(leftHigh);
            p1++
        }

    }

    while(p2>0){
       if(height[p2] >= rightHigh){
            rightHighArr.push(0);
            rightHigh = height[p2];
            p2--;
        }
        else{
            rightHighArr.push(rightHigh);
            p2--;
        }

    }


    for(let i = 0; i<leftHighArr.length ; i++){
        let sum = Math.min(leftHighArr[i],rightHighArr[rightHighArr.length-1-i]) - height[i+1];

        if(sum > 0){
            total+=sum;
        }
    }



    return total;
    }
}
