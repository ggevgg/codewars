Array.prototype.splice = function (from, count) {
	var newArr = this.slice(0, from).concat(Array.from(arguments).slice(2)).concat(this.slice(from + count));
	var spliceArr = this.slice(from, from + count);
	this.length = 0;
	this.push.apply(this, newArr);
	return spliceArr;
};



var a = [1,2,3,4,5,6,7,8,9];
console.log(a.splice(2,5, 101, 202), [3,4,5,6,7]); 
console.log(a, [1, 2, 8, 9]);