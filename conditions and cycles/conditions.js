
//урок про условия

const num = 50;

if (num < 49) {
	console.log('Error');
} else if (num > 100) {
	console.log('too much');
} else {
	console.log('Ok!')
}

//1.2 Условный (тернарный) оператор

(num === 50) ? console.log('Ok!') : console.log('Erorr');

//1.3 Switch

switch (num) {
	case 49:
		console.log('no');
		break;
	case 100:
		console.log('not again');
		break;
	case 50:
		console.log('yeap');
		break;
	default:
		console.log('если ничего не выолнено выше');
		break;
}