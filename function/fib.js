function fib(x) {
	if (typeof(x) !== 'number' || x <= 0 || !Number.isInteger(x)) {
		return ""
	}

	if (x === 1) {
		return "0"
	}

	let arr = [];
	arr[0] = 0;
	arr[1] = 1;
	for (let i = 2; i < x; i++) {
		arr[i] = arr[i - 1] + arr[i - 2]
	}
	let arrString = arr.join(" ");
	
	return arrString
}


console.log(fib(10))

// авторское

function fib(num) {
	if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
			return "";
	}

	let result = '';
	let first = 0;
	let second = 1;

	for (let i = 0; i < num; i++) {
			if (i + 1 === num) {
					result += `${first}`;
					// Без пробела в конце
			} else {
					result += `${first} `;
			}

			let third = first + second;
			first = second;
			second = third;
	}

	return result;
}