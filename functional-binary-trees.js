function List() {}

function EmptyBinaryTree() { this.root = null; }
EmptyBinaryTree.prototype = new List();
EmptyBinaryTree.prototype.constructor = EmptyBinaryTree;

EmptyBinaryTree.prototype.isEmpty = function() { return true; };
EmptyBinaryTree.prototype.depth = function() {	return 0; };
EmptyBinaryTree.prototype.count = function() { return 0;}
EmptyBinaryTree.prototype.inorder = function() {	}
EmptyBinaryTree.prototype.preorder = function() {	}
EmptyBinaryTree.prototype.postorder = function() {	}
EmptyBinaryTree.prototype.contains = function() {	}
EmptyBinaryTree.prototype.insert = function(x) { return new BinaryTreeNode(x, this) };
EmptyBinaryTree.prototype.remove = function(x) { return this; };


EmptyBinaryTree.prototype.toString = function() { return '()'; };
EmptyBinaryTree.prototype.append = function(xs) {
	return xs;
};

function BinaryTreeNode(value, next, side) {
		var newNode = {};
			newNode.value = value;
			newNode.left = null;
			newNode.right = null;
		if (!this.root) this.root = newNode; else this.insert(newNode);
		return this;
}
BinaryTreeNode.prototype = new List();
BinaryTreeNode.prototype.constructor = BinaryTreeNode;
BinaryTreeNode.prototype.isEmpty = function() { return false; };
BinaryTreeNode.prototype.depth = function() { return 1 + this.next.depth(); };
BinaryTreeNode.prototype.count = function() { return (this.value ? 1 : 0) + this.next.depth(); }
BinaryTreeNode.prototype.inorder = function() {	}
BinaryTreeNode.prototype.preorder = function() {	}
BinaryTreeNode.prototype.postorder = function() {	}
BinaryTreeNode.prototype.contains = function() {	}
BinaryTreeNode.prototype.insert = function(x) { 
	var value = x.value;
	var traverse = function(node) {
		if (value > node.value) {
			if (!node.right) {
				node.right = x;
				return;
			} else traverse(node.right);
		} else {
			if (value < node.value) {
				if (!node.left) {
					node.left = x;
					return;
				} else traverse(node.left);
			}
		}
	}
	traverse(this.root);
return this.root;



};
BinaryTreeNode.prototype.remove = function(x) { 
	var _this = this.next.remove(x);
	if (x == this.value) return _this;
	if (_this == this.next) return this;
	else return new BinaryTreeNode(this.value, _this);
};

BinaryTreeNode.prototype.toString = function() { 
	var _this = this;
	var s = [];
		while ('next' in _this) {
			s.push(_this.value);
			_this = _this.next;
		}
		return '(' + s.join(' ') + ')'; 
};
BinaryTreeNode.prototype.head = function() {
	return this.value;
};
BinaryTreeNode.prototype.tail = function() {
	return this.next;
};
BinaryTreeNode.prototype.append = function(xs) { 
	return new BinaryTreeNode(this.value, this.next.append(xs));
}



var tree0 = new EmptyBinaryTree();
var tree1 = tree0.insert('c');
var tree2 = tree1.insert('b');
//var tree3 = tree2.insert('d');
//var tree4 = tree3.insert('a');



/*

var list0 = new EmptyBinaryTree();        // => "()"
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


mt = new EmptyBinaryTree();
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
*/