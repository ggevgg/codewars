function solution(s, sym) {
	debugger;
	var i = 0;
	var str = s;
	var posStart = -1;
	var posEnd = -1;
	//while (posStart = s.indexOf(sym[i]) !== -1) 
	{
		if (posEnd = s.indexOf(sym[i]) !== -1) {
			console.log('string before slice', str);
			str = str.slice(0, posStart) + (str.slice(posEnd));
			console.log('string after slice', str);


		}



	}


}






var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"