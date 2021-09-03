module.exports = function solveSudoku(matrix) {

  
  function findZero(matrix){
    for(let row = 0; row < matrix.length; row++){
      for(let col = 0; col < matrix[row].length; col++){
        if(matrix[row][col] === 0){
          return [row, col];
        }
      }
    }
    return false;
  }


  function isTrueNumber(matrix, row, col, number){
if(checkCol(matrix, col, number)&&
checkRow(matrix, row, number)&&
checkSquare(matrix, row, col, number)){return true};
return false; 
  }


  function checkRow(matrix, row, number){
    for(let i = 0; i < matrix[row].length; i++){
      if (matrix[row][i] === number) return false;
          }
    return true;
  }


  function checkCol(matrix, col, number){
    for(let i = 0; i < matrix.length; i++){
      if (matrix[i][col] === number) return false;
       }
    return true;
  }


  function checkSquare(matrix, row, col, number){
    for(let i = 0; i < 3; i++){
      for (let j = 0; j <3; j++){
        if(matrix[(3 * Math.floor(row /3))+i][(3 * Math.floor(col /3)) + j] === number){
          return false;
        }
      }
    }
    return true;
  }


function isSolution(matrix){
  
  let emptyPosition = findZero(matrix);
  

  if(!emptyPosition){
    return "solved!";
  }
   let [row, col] = emptyPosition;
 
  
  let number;
  for( number = 1; number <= 9; number++){
    if(isTrueNumber(matrix, row, col, number)) {
      matrix[row][col] = number;
    
      isSolution(matrix);
    }
  }
    if(findZero(matrix, row, col, number)) matrix[row][col] = 0;
    
      return matrix;
      
  }
  
return isSolution(matrix);


}


