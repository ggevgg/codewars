String.prototype.toBase64 = function(s) {
	var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	var binary = '';
	var res = '';
	for (var i = 0; i < this.length; i++) {
		var newBin = this[i].charCodeAt(0).toString(2);
		while (newBin.length < 8) newBin = '0' + newBin;
		binary += newBin;
	}
	for (var i = 0; i < binary.length; i += 6) {
		var base64sym = binary.slice(i, i + 6);
		var dec = parseInt(base64sym, 2);
		res += base[dec];
	}
	return res;
}

String.prototype.fromBase64 = function() {
	var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	var binary = '';
	var res = '';
	for (var i = 0; i < this.length; i++) {
		var index = base.indexOf(this[i]);
		var newBin = index.toString(2);
		while (newBin.length < 6) newBin = '0' + newBin;
		binary += newBin;
	}
	for (var i = 0; i < binary.length; i += 8) {
		var dec = parseInt(binary.slice(i, i + 8), 2);
		res += String.fromCharCode(dec);
	}
	return res;
}




console.log('this is a string!!'.toBase64(), 'dGhpcyBpcyBhIHN0cmluZyEh');
console.log('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64(), 'this is a string!!');

console.log('VGhlIGtleSBpcyAiMy4xNDE1OSI='.fromBase64());