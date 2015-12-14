function validBraces(braces){
	var s = '';
	for (var i = 0; i < braces.length; i++) {
		if(braces[i] === '(' || braces[i] === '{' || braces[i] === '[') s += braces[i];

		if (braces[i] === ')')
			if (s[s.length - 1] === '(') {
				s = s.slice(0, s.length - 1);
			} else {
				return false;
			}
		if (braces[i] === ']') 
			if(s[s.length - 1] === '[') {
				s = s.slice(0, s.length - 1);
			} else {
			return false;
			}	
		if (braces[i] === '}')
			if(s[s.length - 1] === '{') {
				s = s.slice(0, s.length - 1);
			} else {
			return false;
			}
	}
	if (!s) return true; else return false;
}


console.log(validBraces( "(){}[]" ));// => returns true 
console.log(validBraces( "(}" ));// => returns false 
console.log(validBraces( "[(])" ));// => returns false 
console.log(validBraces( "([{}])" ));// => returns true 