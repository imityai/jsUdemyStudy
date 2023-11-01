const soldier = {
	health: 400,
	armor: 100,
	sayHello: function () {
		console.log('Hello');
	}
}

const peter = Object.create(soldier);

const john = {
	health: 100
}

// john.__proto__ = soldier; //старый метод

Object.setPrototypeOf(john, soldier);

console.log(john.armor);
peter.sayHello();