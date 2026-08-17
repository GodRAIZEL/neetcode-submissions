class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        for(let i = 0; i<board.length ; i++){
            let duplicateSet = new Set();
            for(let j = 0 ; j < board.length ; j++){

                if(Number(board[j][i])){

                  if(duplicateSet.has(board[j][i])){
                    return false;
                  }

                  duplicateSet.add(board[j][i]);

                }

            }
        }


        for(let i = 0; i<board.length ; i++){
            let duplicateSet = new Set();
            for(let j = 0 ; j < board.length ; j++){

                if(Number(board[i][j])){

                  if(duplicateSet.has(board[i][j])){
                    return false;
                  }

                  duplicateSet.add(board[i][j]);

                }

            }
        }

        let box = Math.sqrt(board.length);

        for(let i = 0; i< board.length; i+=3){
            for(let j = 0; j<board.length; j+=3){

                let duplicateSet = new Set();

                for(let k = 0; k < box ; k++){
                    for(let l = 0; l < box; l++){
                        let value = board[i+k][j+l];
                        if(Number(value)){

                            if(duplicateSet.has(value)){
                                return false;
                            }

                            duplicateSet.add(value)

                        }
                    }
                }



            }

        }




        return true;
    }
}
