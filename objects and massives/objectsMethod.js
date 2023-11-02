"use strict";

//Создание объектов

const objold = new Object(); //так уже никто не делает

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		background: 'red'
	},
	makeTest: function () {
		console.log('Test'); //создание своего метода
	}
};

options.makeTest();

const { border, background } = options.colors; //деструктаризация 
console.log(border);

console.log(Object.keys(options).length); //вывод длины объекта

console.log(options.name); 

delete options.name; //удаляет свойство из объекта

console.log(options); 
let counter = 0; //узнать длинну объекта

for (let key in options) { //перебор свойств
	if (typeof (options[key]) === 'object') {
		for (let i in options[key]) {//перебор свойств внутри вложенного объекта
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`) //вывод свойств вложенного объекта в консоль
			counter++ //обновляет счетчик
		}
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`)  //вывод свойств в консоль
		counter++ //обновляет счетчик
	}
	
}

console.log(counter)