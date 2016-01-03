function removeNb (n) {
  var r = [];
  for (var a = 1; a <= n; a++) {
    var b = (n * (n + 1) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) r.push([a, b])
  }
return r;
}

console.log(removeNb(26));





