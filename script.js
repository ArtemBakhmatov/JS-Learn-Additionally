const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
	console.log(curr * amount); // 14000
}

convert(500, usdCurr); // 14000
convert(500, eurCurr); // 16000