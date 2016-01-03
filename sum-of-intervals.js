function sumIntervals(intervals){
	var res = 0;
	var sortedIntervals = intervals.sort(function(a, b) {
		if (+a[0] > +b[0]) return 1;
		if (+a[0] < +b[0]) return -1;
	});
	var stack = [];
	stack.push(sortedIntervals[0]);
	for (var i = 1; i < sortedIntervals.length; i++) {
		if ((sortedIntervals[i][0] > stack[stack.length - 1][0]) && (sortedIntervals[i][0] > stack[stack.length - 1][1])) {
			stack.push(sortedIntervals[i]);
		} else {
			if ((sortedIntervals[i][0] > stack[stack.length - 1][0]) && (sortedIntervals[i][1] > stack[stack.length - 1][1])) {
				stack[stack.length - 1][1] = sortedIntervals[i][1];
			}
		}
	}
	for (var i = 0; i < stack.length; i++) 
		res += stack[i][1] - stack[i][0];
	return res;
}

console.log(9, sumIntervals( [
	[1,2],
	[6, 10],
	[11, 15]
] )); //=> returns 9

console.log(7, sumIntervals( [
	[1,4],		
	[7, 10],
	[3, 5]
] )); //=> returns 7

console.log(19, sumIntervals( [
	[1,5],
	[10, 20],
	[1, 6],
	[16, 19],
	[5, 11]
] )); //=> returns 19


