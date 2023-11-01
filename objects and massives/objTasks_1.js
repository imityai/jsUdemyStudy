const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
			languages: ['ru', 'eng'],
			programmingLangs: {
					js: '20%',
					php: '10%'
			},
			exp: '1 month'
	},
	showAgeAndLangs: function(plan) {
		const {age} = plan;
		const {languages} = plan.skills;
		let str = `Мне ${age} и я владею языками: `;

		languages.forEach(function(lang) {
				str += `${lang.toUpperCase()} `;
		});

		return str;
}
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

//1
function showExperience(plan) {
	const { exp } = plan.skills; 
	return exp;
}

//2
function showProgrammingLangs(plan) {
	let answer = '';

	for (let key in plan.skills.programmingLangs) {

		for (let i = 0; i < 1; i++) {
			answer += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}`;
		}

		answer += '\n';
		}
		
	return answer;
}



showProgrammingLangs();

//2 авторское решение

function showProgrammingLangs(plan) {
	let str = '';
	const {programmingLangs} = plan.skills;
	for (let key in programmingLangs) {
			str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
	}

	return str;
}

showProgrammingLangs(personalPlanPeter);