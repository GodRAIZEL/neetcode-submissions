class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0;
        let end =  s.length-1;
        let regex = /[a-zA-Z0-9]/;

     
        while(start<end){

            while(start<end && !regex.test(s[start])){
                start++;
            }

             while(start<end && !regex.test(s[end])){
                end--;
            }

            if(start>=end){
                break;
            }

            if(s[start].toLowerCase() !== s[end].toLowerCase()){
                return false;
            }

            start++;
            end--;


        }

        return true;
    }
}
