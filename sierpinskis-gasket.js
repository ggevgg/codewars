/*function sierpinski(n) {
	function pascal(i, j) {
		return (j === 0 || j === i) ? 1 : (pascal(i - 1, j - 1) + pascal(i - 1, j)) %2;
	}
	debugger;
	var c = [];
	for (var i = 0; i < Math.pow(2, n); i++) {
			for (j = 0; j <= i; j++) 
			c += pascal(i, j);
		c += '\n';
	}
	c = c.replace(/1/g, 'L').replace(/0/g, ' ').replace(/(L| )/g, '$1 ').replace(/(\s\n)|(\s$)/g, '\n').replace(/\n$/, '');

	return c;
}



*/


function triangle(o) {
  var n = 1<<o, line = new Array(2*n), i,j,t,u;
  line[n] = '*';
  for (i=0; i<n; ++i) {
    document.write(line.join('')+"\n");
    u ='*';
    for(j=n-i; j<n+i+1; ++j) {
      t = (line[j-1] == line[j+1] ? '&nbsp;' : '*');
      line[j-1] = u;
      u = t;
    }
    line[n+i] = t;
    line[n+i+1] = '*';

  }
}
document.write("<pre>\n");
triangle(2);
document.write("</pre>");