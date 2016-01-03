var str = "javascript.st =1 \
javascript.st1 = 2 \
res.par1.par2 =212 \
res.js =2123";

function parser(str) {  
  var rgxp = /([\S]*)\s?=\s?(\d*)/g,
    result = {},
    substr, keys, parents, i;
  while (substr = rgxp.exec(str)) {
    substr = substr[0].split("=")
    keys = substr[0].trim().split(".")
    parent = result
    for (i = 0, ln = keys.length; i < ln; i++) {
      parent[keys[i]] = parent[keys[i]] || {}
      i == (ln - 1) ? (parent[keys[i]] = substr[1].trim()) : (parent = parent[keys[i]])
    }
  }
  return result
}
console.log(parser(str));
console.log(JSON.stringify(parser(str)));
// {"javascript":{"st":"1","st1":"2"},"res":{"par1":{"par2":"212"},"js":"2123"}}