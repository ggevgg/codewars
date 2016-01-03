//Алгори́тм Нарайа́ны
function c(arr) {
	var arrSort = arr.sort();
	var n = arr.length - 1;
console.log(arr);
for (var i = 0; i < 24; i ++) {
	for (var j = arr.length - 2; (j >= 0) && (arr[j] >= arr[j + 1]); j--) {}

	var l = n;
	while (arr[j] >= arr[l]) l--;
	
	var tmp = arr[j];
	arr[j] = arr[l];
	arr[l] = tmp;

console.log(arr);
}

}

console.log(c([1,2,3,4]));
/*Шаг 1: найти такой наибольший j, для которого a_{j} < a_{j+1}.
Шаг 2: увеличить a_{j}. Для этого надо установить l=n. Далее, пока a_{j} \geqslant a_{l}, уменьшать l на 1. Затем поменять местами a_{j} и a_{l}.
Шаг 3: развернуть последовательность a_{j+1},...,a_{n}.*/