//1
const someString = 'This is some strange string';

// const products = someString.split('');
// console.log(products);
// const reversed = products.reverse();
// console.log(reversed);
// const arr = reversed.join('');
// console.log(arr);

function reverse(str) {
	if (typeof(str) !== 'string') {
		console.log("Ошибка!");
		return "Ошибка!";
	} else {
		let strToArr = str.split('');
		let reversed = strToArr.reverse();
		let arrToStr = reversed.join('');
		console.log(arrToStr);
		return arrToStr;
	}
}

reverse(someString);

//1. Авторское решение

const someString1 = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}

reverse(someString1);


//2
//Представьте такую реальную ситуацию. У вас есть банкомат, который выдает 
//деньги из двух разных банков в разных валютах.Один банк основной с базовыми валютами, 
//второй дополнительный с прочими валютами:

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:

// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:

// Доступные валюты:
// UAH
// RUB
// Заметьте:

// - CNY (юань) исчез из списка валют, значит такая валюта закончилась

// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

// - Данные для первого аргумента должны приходить сразу из двух банков, 
// причем сначала baseCurrencies, потом additionalCurrencies по порядку

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];


function availableCurr(arr, missingCurr) {
	if (arr.length === 0) {
		console.log('Нет доступных валют');
		return 'Нет доступных валют';
	}
	
	const newArray = [];
		
	for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== missingCurr) {
      newArray.push(arr[i]);
    }
  }

	const arrToStrFortmat = newArray.join('\n');
  console.log(`Доступные валюты:\n${arrToStrFortmat}`);
	return `Доступные валюты:\n${arrToStrFortmat}`;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')


// 2авторское

const baseCurrencies2 = ['USD', 'EUR'];
const additionalCurrencies2 = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }
	console.log(str);
    return str;
}

availableCurr([...baseCurrencies2, ...additionalCurrencies2], 'CNY')