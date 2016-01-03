Array.prototype.reduce = function(callback, startValue) {
	var res = (startValue === undefined) ? this[0] : startValue;
	for (var i = (startValue === undefined) ? 1 : 0; i < this.length; i++) { res = callback(res, this[i], i, this); };
	return res;
}

console.log([1,2,3].reduce( function(sum, next){return sum+next}, 0))
console.log(['a','b','a'].reduce( function(obj, elem){if(!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj}, {})) 