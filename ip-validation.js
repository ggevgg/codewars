function isValidIP(str) {
 	var arr = str.split(' ');
 	var reg = new RegExp(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);

 	for (var i = 0; i < arr.length; i++) {
 		if (!reg.test(arr[i])) return false;




 	}

  return true;
}
console.log(isValidIP('1.2.3.4 123.45.67.89'));
console.log(isValidIP('1.2.3 1.2.3.4.5 123.456.78.90 123.045.067.089'));

