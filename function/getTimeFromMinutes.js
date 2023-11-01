function getTimeFromMinutes(time) {
	if (isNaN(time) || time < 0 || (time % 1) !== 0) {
		return "Ошибка, проверьте данные"
	}
	
	if (time === 0) {
		return "Это 0 часов и 0 минут"
	}
	
	if (time === 60) {
		return "Это 1 час и 0 минут"
	}
	
	let a = 0;
	let b = 0;
	
	if (time < 59) {
		b = time;
	}
	
	b = time;

	if (time > 60) {
		for (let i = 0; b >= 60; i++) {
			b = b - 60;
			a++;
		}
	}

	if (a === 1) {
		a = `Это ${a} час и `;
	} else if (a >= 2 && a <= 4) {
		a = `Это ${a} часа и `;
	} else {
		a = `Это ${a} часов и `;
	}

	if (b === 0 || b >= 5 && b <= 20 || (b % 10) === 0 || (b % 10) >= 5) {
		b = `${b} минут`;
	} else if ((b % 10) === 1) {
		b = `${b} минутa`;
	} else {
		b = `${b} минуты`;
	}

	return a + b
}

console.log(getTimeFromMinutes(33.3))



//авторское

function getTimeFromMinutes(minutesTotal) {
	if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
			return "Ошибка, проверьте данные";
	}

	const hours = Math.floor(minutesTotal / 60);
	const minutes = minutesTotal % 60;

	let hoursStr = '';

	switch (hours) {
			case 0: 
					hoursStr = 'часов';
					break;
			case 1:
					hoursStr = 'час';
					break;
			case 2:
			case 3:
			case 4:
					hoursStr = 'часа';
					break;
			default:
					hoursStr = 'часов';
	}

	return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(59))