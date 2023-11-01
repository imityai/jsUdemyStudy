
//DZ
console.log( NaN || 2 || undefined ); //2


console.log( NaN && 2 && undefined ); //NaN


console.log( 1 && 2 && 3 ); //3


console.log(!1 && 2 || !3 ); //false


console.log( 25 || null && !3 ); //25


console.log( NaN || null || !3 || undefined || 5); //5


console.log( NaN || null && !3 && undefined || 5); //5


console.log(5 === 5 && 3 > 1 || 5); //true

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}


//DZ2

for (let i = 1; i < 11; i++) {
	
	console.log(++i)
}

for (let i = 2; i <= 16; i++) {
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}

let i = 2;

while (i < 16) {
	i++
	console.log(i);
	i++;
}

for (let i = 20; i > 9; i--) {
	
	if (i === 13) {
		break;
	} else {
		console.log(i);
	}
}

	const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 1; i < 51; i++) {
		result[i] = i;
		let j = i;

    }
    
    // Не трогаем

console.log(result);


// 4 fuction
"use strict";

let num4 = 1; //глобальная переменная

function showFirstMessage(text) { //объявление
	console.log(text);
	num4 = 20; // переменная объявленная внутри функции, существует только там
}

showFirstMessage('hello'); //вызов
console.log(num4); // выведет 20

function calc(a, b) {
	return (a + b); //возвращение из функции, конец функци
	console.log('kaka'); // не выполниться потому что return сверху
}

console.log(calc(200, 2));



function ret() {
	let num5 = 50;

	//

	return num5;
}

const anotherNum5 = ret();
console.log(anotherNum5);

const logger4 = function () { // function expression
	console.log('kaka');
};

logger4();

const calc4 = (a, b) => { return a + b }; //стрелочная функция


function sayHello(name) {
	console.log('Привет, '+ name +'!');
}

sayHello('Антон');




//28 методы и свойства строк и чисел
// уаьонкгнаш4нкн54енклш54ег54нглк734на45нкг3лененл5нкьон254лкног5256ког5нелш7лшен


// кнаьш34нгеьш43гплш35гшн5шнп3лшбюбюбюбюбюбю

// бю



const size24 = '12.2px';
console.log(parseInt(size24)); 
console.log(parseFloat(size24));


function calculateVolumeAndArea(side) {
	if (side === null || side === '' || side % 1 !== 0) {
			return "При вычислении произошла ошибка"
	}
	return  `Объем куба: ${side*25}, площадь всей поверхности: ${side*30}`
}

console.log(calculateVolumeAndArea(5.5))