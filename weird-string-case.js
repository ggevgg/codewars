function toWeirdCase(string){
 var res = '';
 var e = false;
 for (var i = 0; i < string.length; i++) {
 		if (string[i] !== ' ') {
 			if (e) res += string[i].toLowerCase(); else res += string[i].toUpperCase(); 
 			e = !e;
 		} else 
 		{
 			res += ' ';
 			e = false;
 		}
 	}
 return res;
}
console.log(toWeirdCase( "String" ));//=> returns "StRiNg"
console.log(toWeirdCase( "Weird string case" ));//=> returns "WeIrD StRiNg CaSe"



  it('should return the correct value for multiple words', function(){
    Test.assertEquals(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
  });
});