var Sudoku = function(board) {
  return {
    isValid: function() {
        if (board.length === 0) return false; //don't set board
        if (board.length !== board[0].length) return false; //don't square board
        var n = board.length;
        var nSmall = Math.sqrt(n); //size of small square
        for (var j = 0; j < n; j++){
          var arr1 = [];
          var arr2 = [];
          for (var i = 0; i < n; i++){
            if (!(board[j][i] > 0 && board[j][i] <= n * n && board[j][i] !== true)) return false; //incorrect data on board
            if (!~arr1.indexOf(board[j][i])) arr1.push(board[j][i]);else return false;
            if (!~arr2.indexOf(board[i][j])) arr2.push(board[i][j]);else return false;
          }
        }
        for (var n = 0; n < nSmall; n++) {
          for (var k = 0; k < nSmall; k++) {
            var arr3 = [];
            for (var j = 0; j < nSmall; j++) {
              for (var i = 0; i < nSmall; i++) {
                if (!~arr3.indexOf(board[j+nSmall*k][i+nSmall*n])) arr3.push(board[j+nSmall*k][i+nSmall*n]);else return false;
              }
            }
            arr3 = [];
          }
        }
        return true;
      }
    };
  }
