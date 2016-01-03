function validSolution(board){
  if (~board.indexOf(0) || ~board.indexOf('0')) return false;
  for (var j = 0; j < 9; j++){
    var arr1 = [];
    var arr2 = [];
    for (var i = 0; i < 9; i++){
      if (!~arr1.indexOf(board[j][i])) arr1.push(board[j][i]);else return false;
      if (!~arr2.indexOf(board[i][j])) arr2.push(board[i][j]);else return false;
    }
  }
  for (var n = 0; n < 3; n++) {
    for (var k = 0; k < 3; k++) {
      var arr3 = [];
      for (var j = 0; j < 3; j++) {
        for (var i = 0; i < 3; i++) {
          if (!~arr3.indexOf(board[j+3*k][i+3*n])) arr3.push(board[j+3*k][i+3*n]);else return false;
        }
      }
      arr3 = [];
    }
  }
  return true;
}


console.log(true,validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                                [3, 4, 5, 2, 8, 6, 1, 7, 9]]));
                                
console.log(false,validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                                 [6, 7, 2, 1, 9, 0, 3, 4, 8],
                                 [1, 0, 0, 3, 4, 2, 5, 6, 0],
                                 [8, 5, 9, 7, 6, 1, 0, 2, 0],
                                 [4, 2, 6, 8, 5, 3, 7, 9, 1],
                                 [7, 1, 3, 9, 2, 4, 8, 5, 6],
                                 [9, 0, 1, 5, 3, 7, 2, 1, 4],
                                 [2, 8, 7, 4, 1, 9, 6, 3, 5],
                                 [3, 0, 0, 4, 8, 1, 1, 7, 9]]));