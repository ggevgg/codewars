function convertQueryToMap(query) {
	query = query.replace('%20', ' ');
	/*query = query.replace('%26', '&');
	query = query.replace('%3D', '=');
	query = query.replace('%3F', '?');*/
	var arr = query.split('&');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]) {
			var path = arr[i].split('=')[0];
			var value = arr[i].split('=')[1];
/*			value = value.replace('%26', '&');
			value = value.replace('%3D', '=');
			value = value.replace('%3F', '?');*/
			console.log(path, value);

		}
	}


	var rPath = /\S*.?/;
	console.log();

	var rgxp = /([\S]*)\s?=\s?(\w|\s)*/g,
	result = {},
	substr, keys, parents, i;
	for (var q = 0; q < arr.length; q ++) {
		while (substr = rgxp.exec(arr[q])) {
			substr = substr[0].split("=")
			keys = substr[0].trim().split(".")
			parent = result
			for (i = 0, ln = keys.length; i < ln; i++) {
				parent[keys[i]] = parent[keys[i]] || {}
				i == (ln - 1) ? (parent[keys[i]] = substr[1].trim()) : (parent = parent[keys[i]])
			}
		}
	}
	return result
}








var q = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue',
out = {
	'user': {
		'name': {
			'firstname': 'Bob',
			'lastname': 'Smith'
		},
		'favoritecolor': 'Light Blue'
	}
};
console.log(convertQueryToMap('a.b.c=a%26b%3Dc%3F'));