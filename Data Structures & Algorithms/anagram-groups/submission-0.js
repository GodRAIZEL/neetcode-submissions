class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       let groupedAnagrams =[];
       let isGrouped = false;

       if(strs.length === 1){
        return [[strs[0]]];
       }


      outerloop:  for(let i = 0; i<strs.length ; i++){
 
            if(groupedAnagrams.length > 0){

                 for(let k = 0 ; k<groupedAnagrams.length ; k++){
               
                     if(groupedAnagrams[k].includes(strs[i])){
                        continue outerloop;
                     }
                     else{
                        isGrouped = false;
                     }

                }

            }

            for(let j=i+1; j<strs.length;j++){
                if(strs[i].length !== strs[j].length){
                    continue;
                }

                if(strs[i].split('').sort().join('') === strs[j].split('').sort().join('')){
                    isGrouped = true;
                    if(groupedAnagrams.length === 0){
                        groupedAnagrams.push([strs[i],strs[j]]);
                        continue;
                    }
                    if(i > groupedAnagrams.length-1){
                    groupedAnagrams.push([strs[i],strs[j]]);
                    }
                    else{
                    groupedAnagrams[i].push(strs[j]);
                    }
                }
                

            }

            if(!isGrouped){
                     groupedAnagrams.push([strs[i]]);
                }



        }

        return groupedAnagrams;


    }
}
