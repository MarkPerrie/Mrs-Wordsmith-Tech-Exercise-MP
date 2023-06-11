export const numberConverter = function (inputNumber : number) {
    type romanRules = {
        [key: string]: number
      }
	const rules:romanRules= {
		"M": 1000,
		"CM": 900,
		"D": 500,
		"CD": 400,
		"C": 100,
		"XC": 90,
		"L": 50,
		"XL": 40,
		"XXX": 30,
		"XX": 20,
		"X": 10,
		"IX": 9,
		"V": 5,
		"IV": 4,
		"I": 1
	}
	
	let romanConversion = "";
	const romanNumerals = Object.keys(rules);
	for (let counter = 0; counter < romanNumerals.length; counter++) {
		const romanValue = rules[romanNumerals[counter]]
		while (inputNumber >= romanValue) {
			inputNumber -= romanValue;
			romanConversion += romanNumerals[counter];
		}
	}
	return romanConversion;
};