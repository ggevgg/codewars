function parseInt(string) {
  var res = 0;
  var p;
  var cnt = 0;
  string = string.replace(/-/g, ' ');
  string = string.replace(/ and /g, ' ');
  var arr = string.split(' ');
  var n0 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
  			'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var n100 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  for (var i = arr.length - 1; i >= 0; i--) {
	var curNum = arr[i];
	if (~(p = n0.indexOf(curNum))) {
		res += p * Math.pow(10, cnt);
		cnt++;
	} else 
	if (~(p = n100.indexOf(curNum))) {
		if (i >= arr.length - 1) cnt = 1;
		res += p * Math.pow(10, cnt);
		cnt++;
	} else
	if (curNum === 'hundred') {
		if (i >= arr.length - 2) cnt = 2; 
		if (arr[arr.length - 1] === 'thousand') cnt = 5;
		if (arr[arr.length - 2] === 'thousand') cnt = 5;
		//if (arr[arr.length - 3] === 'thousand') cnt = 5;
	} else
	if (curNum === 'thousand') {
		if (i == arr.length -3) cnt = 5; 
		if (i == arr.length -1) cnt = 3; 
	}
	else
	if (curNum === 'million') cnt = 6;
  }
  return res;
}


console.log(2000, parseInt('two thousand'));
console.log(700000, parseInt('seven hundred thousand'));
console.log(500300, parseInt('five hundred thousand three hundred'));
console.log(200003, parseInt('two hundred thousand three'));
console.log(101, parseInt('one hundred and one'));
console.log(1, parseInt('one'));
console.log(20, parseInt('twenty'));
console.log(11, parseInt('eleven'));
console.log(246, parseInt('two hundred forty-six'));
console.log(591, parseInt('five hundred ninety-one'));
console.log(111, parseInt('one hundred eleven'));
console.log(420, parseInt('four hundred twenty'));
console.log(1333, parseInt('one thousand three hundred thirty-three'));
console.log(9999, parseInt('nine thousand nine hundred ninety-nine'));
console.log(74823, parseInt('seventy-four thousand eight hundred twenty-three'));
console.log(987654, parseInt('nine hundred eighty-seven thousand six hundred fifty-four'));
console.log(7584638, parseInt('seven million five hundred eighty-four thousand six hundred thirty-eight'));
console.log(1000000, parseInt('one million'));
