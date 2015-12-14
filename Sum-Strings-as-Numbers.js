function sumStrings(a,b) { 
	var res = '';
	var next = 0;
	var diff = Math.abs(a.length - b.length);
	if (a.length < b.length) for (var i = 0; i < diff; i++) a = '0' + a; else
	if (a.length > b.length) for (var i = 0; i < diff; i++) b = '0' + b;

	for (var i = 1; i <= a.length; i ++) {
		var q = (1 * a[a.length - i] + 1 * b[b.length - i] + next);
		if (q >= 10) {
			next = 1;
			q = q.toString().slice(1);
			res = q.toString() + res;
		} else {
			next = 0;
			res = q.toString() + res;
		}
	}
	if (next) res = next + res;
	while (res[0] === '0') res = res.slice(1);
	return res;
}

console.log(sumStrings('00103', '08567'));