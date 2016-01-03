	function parseData(inpData) {
		var outputData = inpData.replace(/\s*\s/g, ' ')									//delete double+ spaces
								.replace(/([\(\*\+\/\-])(\d+)/g, '$1 $2')				//spaces betwen operand & operator
								.replace(/(\d+)([\)\*\+\/\-])/g, '$1 $2')				//spaces betwen operator & operand
								.replace(/([\(\)\*\+\/\-])([\(\)\*\+\/\-])/g, '$1 $2')	//fix double operatos
								.replace(/(\d+\s?[\/\*])\s?\-\s?(\()/g, '- $1 $2')		//fix number *(/) - to - number *(/)
								.replace(/(\d+\s?[\/\*])\s?\-\s?([\d+])/g, '- $1 $2')		//fix *(/) +(-) to *(/) 1 +(-)
								.replace(/ -\s?- /g, ' + ')								//change double - to +
								.replace(/ \+\s?- /g, ' - ')							//change +- to -
								.replace(/^([\+|\-])/g, '0 $1')							//fix begin with operator
								.replace(/(\()\s?([\-\+])/g, '$1 0 $2')					//change "( -(+)" to "( 0 -(+)"
								.replace(/([\)\()])([\)\()])/g, '$1 $2')				//fix double brackets
								.replace(/([\-\+])([\(\)])/g, '$1 $2')					//fix "-(" to "- (" 
								.replace(/\s?\(\s?(\d+)\s?\)\s?/g, ' $1 ')				//change "( number )" to "number"
								//.replace(//g, '')

		return outputData + ' + 0';
	}

var ex = '-123 +12*-3 + 12/-2+2 +(3    *  2+2*(1-4 ) ) - 1 +- 6 / ( 1- -2 ) +12* 123*-(-5 + 2) +(1 - 2) + -(-(-(-4)))';
var ex = '(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11) ';
console.log(parseData(ex));
console.log(ex);