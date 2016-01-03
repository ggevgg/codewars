function Event() {
	var _this = this;
	var listOfSubscribers = [];

	this.subscribe = function() {
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] === 'function') {
				listOfSubscribers.push(arguments[i]);
			}
		}
	}

	this.unsubscribe = function() {
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] === 'function') {
				if (~listOfSubscribers.lastIndexOf(arguments[i]))
					listOfSubscribers.splice(listOfSubscribers.lastIndexOf(arguments[i]), 1);
			}
		}
	}

	this.emit = function() {
		var calls = listOfSubscribers.slice(0);
		for (var i = 0; i < calls.length; i++) {
			calls[i].apply(this, arguments);
		}
	}
}


var event = new Event();
function l(arr) { arr.push('l'); }
function o(arr) { arr.push('o'); }
var e = new Event(),
bucket = [];
e.subscribe(l, o, l);
e.emit(bucket);
console.log(bucket, ['l', 'o', 'l']); 
e.unsubscribe(o, l);
bucket = [];
e.emit(bucket); //bucket should be ['l']
console.log(bucket, ['l']); 