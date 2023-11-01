// урок по циклам

// синтаксис
//2.1

let num123 = 50;

while (num123 < 54) {
	console.log(num123);
	num123++;
}

//2.2

do {
	console.log(num123);
	num123++;
}
while (num123 < 55);

//2.3

for (let i = 1; i < 8; i++) {
	if (i === 6) { 
		//break;
		continue;
	}

	console.log(i)
}

// dop
//вложенный цикл
for (let i = 1; i < 3; i++) {
	console.log(i);
	for (let j = 1; j < 3; j++) {
		console.log(j);
	}
}

//надо сделать:
// *
// **
// ***
// ****
// *****
// ******

let result2 = "";
const length2 = 7;

for (let i = 1; i < length2; i++) {
	
	for (let j = 0; j < i; j++) {
		result2 += "*";
	}
	
	result2 += '\n';
}

console.log(result2);

first: for (let i = 0; i < 3; i++){
	console.log(`First level: ${i}`)
	for (let j = 0; j < 3; j++){
		console.log(`Second level: ${j}`)
		for (let k = 0; k < 3; k++){
			if (k === 2) break first;
			console.log(`Third level: ${k}`);
		}
	}
}