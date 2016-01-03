function csvColumns(csv, indices){
	var res = '';
	var table = csv.split('\n');
	for (var row = 0; row < table.length; row++) table[row] = table[row].split(',');
	for (var row = 0; row < table.length; row++) {
		for (var col = 0; col < indices.length; col++) {
			if (indices[col] < table[0].length) res += table[row][indices[col]];
			if (indices[col] < table[0].length - 2) res += ',';
		}
		if (row < table.length - 1) res += '\n';
	}
	return res.replace(/\n*\n$/, '');
}

	console.log(csvColumns( "1\n2\n3\n4\n5", [ 1 ]));
	console.log(csvColumns( "1,2\n3,4\n5,6", [5, 6, 7] ));
	console.log(csvColumns( "1,2,3\n4,5,6" , [0, 1] ));