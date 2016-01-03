function rec(arr) {
	var res=[];
	function inn(arr1, l) {
		var s='';
		if (arr1.length >= 1) {
			for (var i = 0; i < arr1[0].length; i++) {
				s = l+ arr1[0][i];
				s += inn(arr1.slice(1), s);
				if (s.length === arr.length) res.push(s);
			} 
		} else return '';
		return '';
	}
	inn(arr, '');
	return res;
}




console.log(rec([[3, 6, 2], [6, 3, 9, 5], [9, 6, 8]]));