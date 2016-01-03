function calc(data) {
	console.log(data);
	var arr = parseData(data).split(' ');
	var q = [];  //array for operands
	var w = [];  //array for operators
	var priority = {'*': 1, '/': 1, '+': 2, '-': 2, '(': -1, ')': 0}
	
	function parseData(inpData) {
		var outputData = (inpData + ' + 0')
								.replace(/\s*\s/g, ' ')									//delete double+ spaces
								.replace(/([\(\*\+\/\-])(\d+)/g, '$1 $2')				//spaces betwen operand & operator
								.replace(/(\d+)([\)\*\+\/\-])/g, '$1 $2')				//spaces betwen operator & operand
								.replace(/([\(\)\*\+\/\-])([\(\)\*\+\/\-])/g, '$1 $2')	//fix double operatos
								.replace(/\s?\(\s?([\-\+]?\s\d+)\s?\)\s?/g, '$1 ')		//change "( number )" to "number"
								.replace(/(\d+\s?[\/\*])\s?\-\s?(\()/g, '- $1 $2')		//fix number *(/) - to - number *(/)
								.replace(/(\d+\s?[\/\*])\s?\-\s?([\d+])/g, '- $1 $2')	//fix *(/) +(-) to *(/) 1 +(-)
								.replace(/\s?\-\s?\-\s?/g, ' + ')						//change double - to +
								.replace(/\s?\+\s?\-\s?/g, ' - ')						//change +- to -
								.replace(/^([\+|\-])/g, '0 $1')							//fix begin with operator
								.replace(/(\()\s?([\-\+])/g, '$1 0 $2')					//change "( -(+)" to "( 0 -(+)"
								.replace(/([\)\()])([\)\()])/g, '$1 $2')				//fix double brackets
								.replace(/([\-\+])([\(\)])/g, '$1 $2')					//fix "-(" to "- (" 
								.replace(/\s?([\/\*\+])\s?\+\s?/g, ' $1 ')				//fix "/+" to "/"

		return outputData;
	}

	function getLastOperator() { return w[w.length - 1]; }
	function getPreLastOperator() {return w[w.length - 2]; }
	function popFunction(operands, operators) {
		var b = operands.pop();
		var a = operands.pop();
		var op = operators.pop();
		if (op === '+') { operands.push(a + b); return }
		if (op === '-') { operands.push(a - b); return }
		if (op === '*') { operands.push(a * b); return }
		if (op === '/') { operands.push(a / b); return }
	};
	function canPop(op1, operands) {
		if (!operands.length) return false;
		var p1 = priority[op1];
		var p2 = priority[getLastOperator()];
		return p1 >= 0 && p2 >= 0 && p1 >= p2;
	}

	arr.forEach(function(element, index){
		if (typeof +element === 'number' && !isNaN(+element)) {
			q.push(+element);
		} else {
			if (element === '+' || element === '-' || element === '*' || element === '/' ||	element === '(' || element ===')' ) {
				if (element === ')') {
					while (w.length > 0 && getLastOperator() != '(') popFunction(q, w);
					w.pop(); 
					} else {
						while (canPop(element, w)) popFunction(q, w);
						w.push(element);
					}
				} 
			}
		})
	return q[0];
}

var ex = '(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11) ';
console.log(calc(ex));
var ex = '-123 +12*-3 + 12/-2+2 +(3    *  2+2*(1-4 ) ) - 1 +- 6 / ( 1- -2 ) +12* 123*-(-5 + 2) +(1 - 2) + -(-(-(-4)))';
console.log(calc(ex));
var ex = '(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11) ';
console.log(calc(ex));


var tests = [
  ['1 + 1', 2],
  ['1 - 1', 0],
  ['1 * 1', 1],
  ['1 / 1', 1],
  ['0 - 123', -123],
  ['123', 123],
  ['2 / 2 + 3 * 4.75 + 6', 21.25],
  ['12 * 123', 1476],
  ['2 / ( 2 + 3 ) * 4.33 + 6', 7.732],
];

tests.forEach(function (m) {
  console.log(calc(m[0]), m[1]);
});

