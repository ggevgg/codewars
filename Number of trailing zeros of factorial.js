function zeros (n) {
  var m = 5;
  var cnt = 0;
  while (m <= n) {
    cnt += Math.floor(n / m);
    m *= 5;
  }
  return cnt;
}

console.log(zeros(1000));
