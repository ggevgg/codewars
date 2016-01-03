function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function sortedMerge(first, second) {
  var newOne = [];
  if (!first) return second;
  if (!second) return first;
 
  var listFirst = first;
  var listSecond = second;
  console.log('!', listFirst, listSecond);




  

  return newOne;
}


console.log(sortedMerge(null, null), null, "should return null if both arguments are null.");
console.log(sortedMerge(new Node(1), null), "result should be 1 -> null.");
console.log(sortedMerge(null, new Node(1)), "result should be 1 -> null.");
console.log(sortedMerge(new Node(23), new Node(44)), "result should be 23 -> 44 -> null.");
console.log(sortedMerge(new Node(44), new Node(23)), "result should be 23 -> 44 -> null.");
  
  /*Test.it("should be able to handle lists of length 2", function() {
    assertLinkedListEquals(sortedMerge(buildList([1, 3]), buildList([2, 4])), buildList([1, 2, 3, 4]), "result should be 1 -> 2 -> 3 -> 4 -> null.");
    assertLinkedListEquals(sortedMerge(buildList([3]), buildList([2, 4])), buildList([2, 3, 4]), "result should be 2 -> 3 -> 4 -> null.");
    assertLinkedListEquals(sortedMerge(buildList([3, 4, 5]), buildList([2, 9])), buildList([2, 3, 4, 5, 9]), "result should be 2 -> 3 -> 4 -> 5 -> 9 -> null.");
    assertLinkedListEquals(sortedMerge(buildList([4, 5]), buildList([1])), buildList([1, 4, 5]), "result should be 1 -> 4 -> 5 -> null.");
  });
  Test.it("should be able to handle lists of length 3", function() {
    assertLinkedListEquals(sortedMerge(buildList([1, 3, 8]), null), buildList([1, 3, 8]), "result should be 1 -> 3 -> 8 -> null.");
    assertLinkedListEquals(sortedMerge(buildList([1, 3, 8]), buildList([2, 4, 9])), buildList([1, 2, 3, 4, 8, 9]), "result should be 1 -> 2 -> 3 -> 4 -> 8 -> 9-> null.");
    assertLinkedListEquals(sortedMerge(buildList([2, 3, 5, 8]), buildList([2, 4, 6])), buildList([2, 2, 3, 4, 5, 6, 8]), "result should be 2 -> 2 -> 3 -> 4 -> 5 -> 6 -> 8 -> null");
    assertLinkedListEquals(sortedMerge(buildList([3, 4, 5]), buildList([2])), buildList([2, 3, 4, 5]), "result should be 2 -> 3 -> 4 -> 5 -> null.");
    assertLinkedListEquals(sortedMerge(buildList([1, 1, 1]), buildList([1, 1, 1])), buildList([1, 1, 1, 1, 1, 1]), "result should be 1 -> 1 -> 1 -> 1 -> 1 -> 1 -> null.");
  });
  Test.it("should be able to handle a list of length 8", function() {
    assertLinkedListEquals(sortedMerge(buildList([1, 3, 5, 7, 9, 11, 13, 15]), null), buildList([1, 3, 5, 7, 9, 11, 13, 15]), "result should be 1 -> 3 -> 5 ... 15 -> null.");
    assertLinkedListEquals(sortedMerge(buildList([1, 3, 5, 7, 9, 11, 13, 15]), buildList([1, 3, 3, 5, 6])), buildList([1, 1, 3, 3, 3, 5, 5, 6, 7, 9, 11, 13, 15]), "result should be 1 -> 1 -> 3 -> 3 -> 3 -> 5 -> 5 -> 6 -> 7 -> 9 -> 11 -> 13 -> 15 -> null.");
    assertLinkedListEquals(sortedMerge(buildList([1, 3, 5, 7, 9, 11, 13, 15]), buildList([2, 4, 6, 8, 10, 12, 14, 16])), buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), "result should be 1 -> 2 -> ... 16 -> null.");
    assertLinkedListEquals(sortedMerge(buildList([1, 3, 5, 7, 9, 11, 13, 15]), new Node(88)), buildList([1, 3, 5, 7, 9, 11, 13, 15, 88]), "result should be 1 -> 3 -> 5 -> 7 -> 9 -> 11 -> 13 -> 15 -> 88 -> null.");
  });
});*/