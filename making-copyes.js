function copyList(l){
 return l.slice(0);
}

t = [1,2,3,4];
var tCopy = copyList(t);

console.log(t, tCopy);
t[1] += 5;
console.log(t, tCopy);