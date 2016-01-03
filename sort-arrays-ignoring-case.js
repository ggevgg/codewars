sortme = function( names ){
	var sorted = names.sort(function(a, b) {
		if (a.toUpperCase() > b.toUpperCase()) return 1;
		return -1;
	});
	return sorted;
}

console.log(sortme(["Hello", "there", "I'm", "fine"]), ["fine", "Hello", "I'm", "there" ]);