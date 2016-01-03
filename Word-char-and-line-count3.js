function DocumentParser(reader) {
	this.reader = reader;
	this.reset();
}

DocumentParser.prototype.reset = function() {
	this.wordCount = 0;
	this.charCount = 0;
	this.lineCount = 0;
};

DocumentParser.prototype.parse = function() {
	var newWordStarted = false;
	var finished = false;
	var newBuffer = '1';
	var n = '';
	var temp = '';
	
	function getNextSym(_this) {
		if (!n) n = _this.reader.getChunk();
		var a = n.slice(0, 1);
		n = n.slice(1);
		return a;
	}

	while (newBuffer) {
		newBuffer = getNextSym(this);
		if (!newBuffer && newWordStarted) {
			this.wordCount++;
			this.lineCount++;
			break;
		}
		if (!newBuffer) {
			if (this.charCount) this.lineCount++;
			finished = true;
			break;
		}


		
		if ((newBuffer === ' ' || newBuffer === '\n') && newWordStarted) {
			newWordStarted = false;
			this.wordCount++;
		}
		if (newBuffer !== '\n') {
			this.charCount++;
			if (newBuffer !== ' ') newWordStarted = true;
		}
		if (newBuffer === '\n') {
			this.lineCount++;
		}
	}
};





function FileReaderSimulator(text) {
	var index = -1;
	this.getChunk = function()
	{
		index++;
		return index == text.length ? "" : text.charAt(index);
	};
}




var fileContent = "Once upon a time",
reader = new FileReaderSimulator(fileContent),
parser = new DocumentParser(reader);
parser.parse();
console.log('char:', parser.charCount, 16);//, 16);
console.log('word', parser.wordCount, 4);//, 4);
console.log('line', parser.lineCount, 1);//, 1);




var fileContent = "Is it me, or you?",
reader = new FileReaderSimulator(fileContent),
parser = new DocumentParser(reader);
parser.parse();
console.log('char:', parser.charCount, 17);//, 17);
console.log('word', parser.wordCount, 5);//, 5);
console.log('line', parser.lineCount, 1);//, 1);



var fileContent = "You can try, but you'll never catch me.\nBazinga!",
reader = new FileReaderSimulator(fileContent),
parser = new DocumentParser(reader);
parser.parse();
console.log('char:', parser.charCount, 47);//, 47);
console.log('word', parser.wordCount, 9);//, 9);
console.log('line', parser.lineCount, 2);//, 2);



var fileContent = "Once upon a time.\n",
reader = new FileReaderSimulator(fileContent),
parser = new DocumentParser(reader);
parser.parse();
console.log('char:', parser.charCount, 17);//, 17);
console.log('word', parser.wordCount, 4);//, 4);
console.log('line', parser.lineCount, 2);//, 2);

