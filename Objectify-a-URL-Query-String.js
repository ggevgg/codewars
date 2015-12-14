// Converts a URL Query String into an object map
function convertQueryToMap(query) {
	var arr = query.split('&');
	var res = {};
	console.log('arr=', arr);

	var i = 0;
	var pos = -1;
	var addr = '';

	var pos = arr[i].indexOf('=');
	var value = arr[i].slice(pos + 1);	
	var path = arr[i].slice(0, pos);
	console.log('path',path, 'value',value);


var s='{';

	while(~ (pos = path.indexOf('.'))) {
		var name = arr[i].slice(0, pos);
		s += name + ':';
		res[name] = {};
		arr[i] = arr[i].slice(pos + 1);
	};








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
console.log(convertQueryToMap(q));