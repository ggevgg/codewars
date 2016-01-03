var UriBuilder = function(str) {
	this.params = {};
	if (str.indexOf('?')) {
		var arr1 = str.split('?');
		this.url = arr1[0];
		if (~arr1[1].indexOf('&')) {
			var arr2 = arr1[1].split('&');
		} else {
			arr2 = [arr1[1]];			
		}
		for (var i = 0; i < arr2.length; i++) {
			if (~arr2[i].indexOf('=')) {
				var arr3 = arr2[i].split('=');
				this.params[arr3[0]] = arr3[1];
			} else 
			this.params[arr3[0]] = '';
		}
		console.log(this.url, this.params);
	} else
	this.url = str;
}

UriBuilder.prototype.build = function() {
	var arr = [];
	for (var i in this.params) {
		arr.push(i + '=' +this.params[i]);
	}
	if (arr.length) return encodeURI(this.url+'?'+arr.join('&'));
	else return this.url;
}



//http://www.codewars.com?a=2&b=1


var builder = new UriBuilder('http://www.codewars.com?a=2&b=3')
builder.params.page = 1
builder.params.language = 'javascript'
console.log(builder.build())
/*
// new builder instance to demonstrate pre-existing params.
builder = new UriBuilder('http://www.codewars.com?page=1')

builder.params.page = 2
// should return 'http://www.codewars.com?page=2'
builder.build()

// if you delete params then they will disappear from the url string
delete builder.params.page

// should return 'http://www.codewars.com'
builder.build()



UriBuilder
should have build method
Test Passed
params.a = 1
Test Passed: Value == http://www.codewars.com?a=1
params.a = 2
Test Passed: Value == http://www.codewars.com?a=2
params.b = 1
Test Passed: Value == http://www.codewars.com?a=2&b=1
delete a from params
Test Passed: Value == http://www.codewars.com?b=1
params.b = "a b"
Test Passed: Value == http://www.codewars.com?b=a%20b
*/