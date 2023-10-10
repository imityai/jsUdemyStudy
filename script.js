const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
	b = prompt('Ваша оценка?', ''),
	d = prompt('Один из последних просмотренных фильмов', ''),
	c = prompt('Ваша оценка?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


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