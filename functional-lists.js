function List() {}

function EmptyList() {}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function() {
	return '()';
};
EmptyList.prototype.isEmpty = function() {
	return true;
};
EmptyList.prototype.length = function() {
	return 0;
};
EmptyList.prototype.push = function(x) {
	return new ListNode(x, this);
};
EmptyList.prototype.remove = function(x) {
	return this;
};
EmptyList.prototype.append = function(xs) {
	return xs;
};

function ListNode(value, next) {
	this.value = value; 
	this.next = next;
}
ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() {
	return false;
};
ListNode.prototype.toString = function() { 
	var _this = this;
	var s = [];
		while ('next' in _this) {
			s.push(_this.value);
			_this = _this.next;
		}
		return '(' + s.join(' ') + ')'; 
};
ListNode.prototype.head = function() {
	return this.value;
};
ListNode.prototype.tail = function() {
	return this.next;
};
ListNode.prototype.length = function() {
	return 1 + this.next.length();
};
ListNode.prototype.push = function(x) {
	return new ListNode(x, this)
};
ListNode.prototype.remove = function(x) { 
	var _this = this.next.remove(x);
	if (x == this.value) return _this;
	if (_this == this.next) return this;
	else return new ListNode(this.value, _this);
};
ListNode.prototype.append = function(xs) { 
	return new ListNode(this.value, this.next.append(xs));
}






var list0 = new EmptyList();        // => "()"
console.log(list0);
var list1 = list0.push(3);          // => "(3)"
console.log(list1);
var list2 = list1.push(2);          // => "(2 3)"
console.log(list2);
var list3 = list2.push(1);          // => "(1 2 3)"
console.log(list3);
var list13 = list1.append(list3);   // => "(3 1 2 3)"
console.log(list13);
var list14 = list2.append(list3); // => (2 3 1 2 3)
console.log(list14.toString());
console.log(list14.remove(2).toString());
console.log(list14.toString());


var mt, l1, l2, l3, l4;


mt = new EmptyList();
l1 = mt.push('c').push('b').push('a');
l2 = l1.append(l1);
    //l3 = l1.remove('b');
    //l4 = l2.remove('b');

    

    console.log(mt.isEmpty(), "Empty List is empty");
    console.log( !l1.isEmpty(), "Non-empty list is not empty");
    console.log(mt.toString() === "()", "()");
    //console.log(l3.toString() === "(a c)", "(a c)");
    console.log(mt.length() === 0, "Empty list has length zero");
    console.log(l1.length() === 3, "(a b c) length 3");

    

    console.log(l2.tail().tail().tail() === l1, "(a b c a b c) shares");
    console.log(l2 !== l1, "(a b c a b c) doesn't share too much");
    console.log(l3.tail() === l1.tail().tail(), "(a b c) remove b shares c");
