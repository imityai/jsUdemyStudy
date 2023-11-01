//передача по ссылке или по значению
"use strict";

const obj = {
	a: 5,
	b: 1
};

const copy = obj; //Это ссылка на объект

copy.a = 10;

console.log(copy);
console.log(obj); //выведет два одинаковых объекта

//Как создать независимую копию

function copyNew(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}

const numbers = {
	a: 2,
	b: 3,
	c: {
		x: 7,
		y: 4
	}
};

const newNumbers = copyNew(numbers);

newNumbers.a = 10; //присвоит только в этом объекте
newNumbers.c.x = 10; // присовит и в изначальном, т.к. это поверхностная копия объекта

console.log(newNumbers);
console.log(numbers);

const add = {
	d: 17,
	e: 20
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

//копирование массивов

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'sdaas';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'hz'],
	blogs = ['wordpress', 'livej', 'blogger'],
	internet = [...video, ...blogs, 'fb', 'inst'];//... оператор разворота

console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
	one: 1,
	two: 2
};

const newObj = { ...q };