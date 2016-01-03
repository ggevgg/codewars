function pascalsTriangle(n) {
	function pascal(i, j) {
		return (j === 0 || j === i) ? 1 : pascal(i - 1, j - 1) + pascal(i - 1, j);
	}
	var c = [];
	for (var i = 0; i < n; i++) 
		for (j = 0; j <= i; j++) 
			c.push(pascal(i, j));
	return c;
}



console.log([1,1,1,1,2,1,1,3,3,1], pascalsTriangle(4));