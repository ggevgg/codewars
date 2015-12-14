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
	var buf = '';
	var posSpace = -1;
	var posEndString = -1;
	debugger;
	var end = false;
	var temp = false;
	this.lineCount = 1;
	this.wordCount = 1;

	while(!end) {
		var newBuf = this.reader.getChunk();
		if (!newBuf) end = true;
		if (!end) temp = false;
		if (newBuf[newBuf.length - 1] === '\n')
			temp = true;
		for (var i = 0; i < newBuf.length; i++) {
			if (newBuf[i] === ' ') {
				this.wordCount++;
				this.charCount++;
			} else
			if (newBuf[i] === '\n') {
				this.lineCount++;
				this.wordCount++;
			} else {
				this.charCount++;
			}
		} 
	}
	if (temp) {
		this.lineCount--;
		this.wordCount--;
	}
	if (this.charCount === 0) this.lineCount = 0;

}

function FileReaderSimulator(text) {
	var index = -1;
	this.getChunk = function()
	{
		index++;
		return index == text.length ? "" : text.charAt(index);
	};
}

var fileContent = "Once upon a time\n",
reader = new FileReaderSimulator(fileContent),
parser = new DocumentParser(reader);

parser.parse();

console.log('char:', parser.charCount);//, 16);
console.log('word', parser.wordCount);//, 4);
console.log('line', parser.lineCount);//, 1);