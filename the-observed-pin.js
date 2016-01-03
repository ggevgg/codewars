function getPINs(observed) {
	function getCoord(key) {
		var x = 0, y = 0;
		while ((y < kbd.length - 1) && (x = kbd[y].indexOf(key) === -1)) y++;
		x = kbd[y].indexOf(key);
		return [y,x];
	}

	function getVar(x,y) {
		var s = '' + kbd[y][x];
		if (y - 1 >= 0) s += kbd[y - 1][x];
		if (y + 1 < kbd.length) s += kbd[y + 1][x];
		if (x - 1 >= 0) s += kbd[y][x - 1];
		if (x + 1 < kbd[0].length) s += kbd[y][x + 1];
		return s;
	} 

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

	var kbd = [	['1',  '2',  '3'],
				['4',  '5',  '6'],
				['7',  '8',  '9'],
				['',   '0',  '']];
	var variants = [];
	for (var i = 0; i < observed.length; i++) {
		variants.push(getVar(getCoord(observed[i])[1], getCoord(observed[i])[0]).split(''));
	}
	return rec(variants);
}



var expectations = {
   // "8": ["5", "7", "8", "9", "0"],
    //"11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
    "369":["236", "238", "239", "256", "258", "259", "266", "268", "269", "296", "298", "299", "336", "338", "339", "356", "358", "359", "366", "368", "369", "396", "398", "399", "636", "638", "639", "656", "658", "659", "666", "668", "669", "696", "698", "699"]  };

    for (var pin in expectations) {
    	console.log(getPINs(pin).sort(), expectations[pin].sort(), 'PIN: ' + pin);
    }
//  console.log(power([1,2,4]));
