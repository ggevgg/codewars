	function power(p) {
		var res = [];
		for (var i = 0; i <= Math.pow(2, p.length) - 1; i++) {
			var b = i.toString(2);
			while (b.length < p.length) b = '0' + b;
			var s = [];
			for (var j = 0; j < p.length; j++) {
				if (+b[j]) s.push(p[j]);
			}
			res.push(s);
		}
		return res;
	}





console.log(power([1,2,3,4]));
// => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
