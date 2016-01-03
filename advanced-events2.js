function Event() {
	var _this = this;
	_this.listOfSubscribers = [];
	_this.listOfArguments = {};


	this.subscribe = function() {
		if (typeof arguments[0] === 'function') {
			_this.listOfSubscribers.push(arguments[0]);
			_this.listOfArguments[arguments[0]] = Array.prototype.splice.call(arguments, 1);
			_this.listOfArguments[arguments[0]].this = this;
		}
		console.log('subscribed functions:', _this.listOfSubscribers);
		console.log('list of arguments:', _this.listOfArguments);
	}

	this.unsubscribe = function() {
		if (typeof arguments[0] === 'function') {
			_this.listOfSubscribers.splice(_this.listOfSubscribers.lastIndexOf(arguments[0]), 1);
			//delete _this.listOfArguments[arguments[0]];
		}
		console.log('unsubscribe ok. subscribed functions:', _this.listOfSubscribers);
		console.log('list of arguments:', _this.listOfArguments);

	}

	this.emit = function() {
		



		console.log('emit', arguments);
	}



}



var event = new Event();

function l(arr) { arr.push('l'); }
function o(arr) { arr.push('o'); }

var e = new Event(),
bucket = [];

e.subscribe(l, o, l);
e.emit(bucket);

//bucket should be ['l', 'o', 'l']
console.log(bucket, ['l', 'o', 'l']); 

e.unsubscribe(o, l);
bucket = [];

e.emit(bucket); //bucket should be ['l']

console.log(bucket, ['l']); 