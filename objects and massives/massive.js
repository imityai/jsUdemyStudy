"use strict";

const arr = [1, 22, 13, 46, 8];
arr.sort(compareNum); //отсортирует посимвольно, получится [ 1, 13, 22, 46, 8 ]
console.log(arr);

function compareNum(a, b) {
	return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
console.log(arr);

arr.forEach(function (item, i, arr) {
	console.log(`${i}: ${item} внутри массив ${arr}`);
});

arr.pop(); //метод который удаляет последний элемент из массива
arr.push(10); //метод который добавляет элементв конце массива

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

for (let value of arr) {
	console.log(value);
}

const str = promt('', '');
const products = str.split(', '); //формирование массива из строки
products.sort(); // в этом случаем сортирует массив в алфавитном порядке
console.log(products.join('; ')); //расформировывает массив в строки
