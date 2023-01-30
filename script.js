const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
	return curr * amount; 
	// console.log(1); // Работать не будет, после return код останавливается
}

function promotion(result) {
	console.log(result * discount);
	//return undefined; он выполняется внутри JS, не видно нам
}

const res = convert(500, usdCurr);
promotion(res);

///////////////////////////////////////////////////////////////////////////////
function test() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		if (i === 3) {
			return;
		}
	}
	console.log('Done'); // не сработает так как return останавливает код
}

test();

///////////////////////////////////////////////////////////////////////////////

function doNothing() {};
console.log(doNothing() === undefined);  // true

///////////////////////////////////////////////////////////////////////////////
// Консоль разработчика

// > console.log('11'); // console -> это объект, .log() -> это метод
//  11    // выводи в консоль значение, и т.к console.log() это функция, значит она далжна что то возвращать
// < undefined  // возрвщает undefined, так будет с любой функцией в котором нет return

// Важно: после return код переность нельзя вниз, внутри JS будет выглядеть так: return;