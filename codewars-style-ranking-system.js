function User() {
  this.rank = -8;
  this.progress = 0;
  this.incProgress = function(value) {
    if (value <- 8 || value > 8 || value === 0 || value !== parseInt(value)) 
      throw 'Error. Incorrect value'; 
    if (value >- 1) value--;
    var newRank = this.rank;
    if (this.rank >- 1) newRank--;
    var res = value - newRank;
    var mark = 10 * Math.pow(res, 2);
    if (res === 0) mark = 3;
    if (res === -1) mark = 1;
    if (res < -1) mark = 0;
    this.progress += mark;
    if (this.progress > 100){
      var step = Math.floor(this.progress * 0.01);
        this.progress -= step * 100;
        if (this.rank < 0 && this.rank + step >= 0){
          step++;
        }
        this.rank += step;
        this.rank = Math.min(8, this.rank);
    }
    if(this.rank===8){
          this.progress = 0
        }
  }
}