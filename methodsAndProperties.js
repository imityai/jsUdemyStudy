const str = '  tEst  ';

console.log(str.length); //length - свойство
console.log(str.toUpperCase()); // toUpperCase() - метод
console.log(str.toLowerCase());
console.log(str.trim()); //уберает пробелы справа и слева
console.log(str);


const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); //Поиск подстроки

const log = "Hello world";
console.log(log.substr(3, 6));
console.log(log.slice(7, 11));
console.log(log.substring(7, 11));


const num = 12.12345;
console.log(Math.floor(num)); //Округлнеие в меньшую сторону
console.log(Math.ceil(num)); //Округлнеие в большую сторону
console.log(Math.round(num)); //Округление до ближайшего целого
console.log(num.toFixed(3)); //Сколько знаком после запятой оставить. ВЫВЕДИТ 12.123 (СТРОКА)
console.log(+num.toFixed(3)); //Сколько знаком после запятой оставить. ВЫВЕДИТ 12.123 (ЧИСЛО)
console.log(typeof num.toString()); //Приведения числа к строке

console.log(isNaN('str')); // Проверка является содержимое не числом

const price = '100$';
console.log(parseInt(price)) // Получим число 100

console.log(Math.random()) // Выдает случайное значение от 0 до 1
console.log(Math.max(1, 4, 88, 2, 3, 89)) // Выдает наибольшее число
console.log(Number.isInteger(2)) // Проверка является ли число целым