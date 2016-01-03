function pickPeaks(arr){
  var res = {};
  res.pos = [];
  res.peaks = [];
  var increase = false;
  var lastIncrease;

  for (var i = 1; i < arr.length; i++) {
  	if (arr[i] > [arr[i - 1]]) {
  		increase = true;
  		lastIncrease = i;
  	}
  	if (arr[i] < arr[i - 1]) {
  		if (increase) {
  			res.pos.push(lastIncrease);
  			res.peaks.push(arr[i - 1]);
  			increase = false;
  		}

  	}
  }
    return res;
}


console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]),{pos:[3,7],peaks:[6,3]});
console.log(pickPeaks([1,2,2,2,1]), {pos: [1], peaks: [2]});