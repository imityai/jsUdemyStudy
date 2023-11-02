const shoppingMallData = {
	shops: [
			{
					width: 10,
					length: 5
			},
			{
					width: 15,
					length: 7
			},
			{
					width: 20,
					length: 5
			},
			{
					width: 8,
					length: 10
			}
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000
}


function isBudgetEnough(data) {
	let totalVolume = 0;
	let { moneyPer1m3 } = data;
	let { budget } = data;
	let { height } = data;

	for (let key in data.shops) {
		let arr = data.shops[key];
		let { width, length } = arr;
		let Volume = (width * length * height);
		totalVolume += Volume;
	}

	let totalPrice = totalVolume * moneyPer1m3
	if (budget > totalPrice){
		console.log('Бюджета достаточно');
		return 'Бюджета достаточно'
	} else {
		console.log('Бюджета недостаточно');
		return 'Бюджета недостаточно'
	}
}

//авторское решение

function isBudgetEnough(data) {
	let square = 0;
	let volume = 0;

	data.shops.forEach(shop => {
			square += shop.width * shop.length;
	});

	volume = data.height * square;

	if (data.budget - (volume * data.moneyPer1m3) >= 0) {
			return 'Бюджета достаточно';
	} else {
			return 'Бюджета недостаточно';
	}
}

isBudgetEnough(shoppingMallData);