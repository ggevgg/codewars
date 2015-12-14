function getPINs(observed) {
	var kbd = [	['1',  '2',  '3'],
				['4',  '5',  '6'],
				['7',  '8',  '9'],
				['',   '0',  '']];
	var variants = '';
	var ar = new Array(observed.length);
	function getCoord(key) {
		var x = 0, y = 0;
		while ((y < kbd.length - 1) && (x = kbd[y].indexOf(key) === -1)) y++;
		x = kbd[y].indexOf(key);
		return [y,x];
	}
	function getVar(x,y) {
		var s = ''+kbd[y][x];
		if (y-1>=0) s+=kbd[y-1][x];
		if (y+1<kbd.length) s+=kbd[y+1][x];
		if (x-1>=0) s+=kbd[y][x-1];
		if (x+1<kbd[0].length) s+=kbd[y][x+1];
		return s;
	} 
	
	for (var i = 0; i < observed.length; i++) {
		variants += (getVar(getCoord(observed[i])[1], getCoord(observed[i])[0]));
	}
	console.log(variants);



	function perm(arr) {
    if (arr.length > 1) {
        var beg = arr[0];
        var arr1 = perm(arr.slice(1));
        var arr2 = [];
        var l =  arr1[0].length;
        for(var i=0; i < arr1.length; i++) 
            for(var j=0; j <= l; j++) 
                arr2.push(arr1[i].slice(0, j).concat(beg, arr1[i].slice(j)));
        return arr2;
    } else return [arr];
}

return (perm(variants.split('')));

}




var expectations = {
	"8": ["5", "7", "8", "9", "0"],
	"11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
	"369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
};

for (var pin in expectations) {
    console.log(getPINs(pin));//expectations[pin].sort(), 'PIN: ' + pin);
}
