function findMaxNumber(a, b, c, d) {
	if (typeof(a) !== 'number' ||
      typeof(b) !== 'number' ||
      typeof(c) !== 'number' ||
      typeof(d) !== 'number'){
			return 0;
	}
	
	let arr = [a, b, c, d];
	
	if (arr.length < 3) {
			return 0;
	}

	let max = arr[0];

	for (let i = 0; i <= arr.length; i++){
		if (arr[i] > max) {
			max = arr[i];
		}
	}
 return max
}

console.log(findMaxNumber(1, 4, '3', 4))

// авторское

function findMaxNumber(a, b ,c, d) {
	// Самое простое - это использовать Math.max :)
	// А оптимизировать такую проверку мы научимся совсем скоро
	if (typeof(a) !== 'number' ||
			typeof(b) !== 'number' ||
			typeof(c) !== 'number' ||
			typeof(d) !== 'number') {
			return 0;
	} else {
			return Math.max(a, b ,c, d);
	}
}