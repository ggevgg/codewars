Object.prototype.deepFreeze = function(obj) {
	Object.freeze(obj);
	for (var i in obj) {
		if (typeof obj[i] === 'object') {
			Object.deepFreeze(obj[i]);
		}
	}
}


var a = { b: [42, { x: 9 }] };
Object.deepFreeze(a);

a.b = 42;
console.log(a.b, [42, { x: 9 }]);

a.b[1] = 42;
console.log(a.b[1], { x: 9 });
