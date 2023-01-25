/* 
const hamburger = true;			// гамбургер
const fries = true;				// картошка фри

if (hamburger && fries) {
	console.log('Я сыт!');      // Я сыт!
}

console.log((hamburger && fries));  // true 
*/

/* 
const hamburger = 5;			// гамбургер
const fries = 0;				// картошка фри

if (hamburger && fries) {
	console.log('Я сыт!');      // тут условие невыполнится
}

console.log((hamburger && fries));  // 0 
*/

/* 
const hamburger = 2;			// гамбургер
const fries = 1;				// картошка фри

if (hamburger === 3 && fries) {
	console.log('Все сыты!');      // тут условие невыполнится
} else {
	console.log('Мы уходим!');	   // выполнится вот это условие 
} 
*/

/* 
const hamburger = 3;			// гамбургер
const fries = 1;				// картошка фри
const cola = 0;					// кола

console.log(hamburger === 3 && cola && fries); // 0

if (hamburger === 3 && cola === 1 && fries) {  // true && false && true
	console.log('Все сыты!');      // тут условие невыполнится
} else {
	console.log('Мы уходим!');	   // выполнится вот это условие 
} 

// Когда оператор && наткнулся на первую ложь, условие останавливается
// Когда оператор && наткнулся на правду, вывотся последняя правда (если несколько правдивых значений)

console.log(1 && 0);		// 0
console.log(1 && 5);		// 5
console.log(null && 5);		// null
console.log(0 && 'djhsh');	// 0 
*/

/* 
const hamburger = 3;			// гамбургер
const fries = 0;				// картошка фри
const cola = 0;					// кола

if (hamburger || cola || fries) {  // true && false && false
	console.log('Все довольны!');      // выполнится условие
} else {
	console.log('Мы уходим!');	   
}  
*/

// Когда ИЛИ ноходит первую правду условие прекщается
// ИЛИ запинается на правде


/* 
const hamburger = 0;			// гамбургер
const fries = 0;				// картошка фри
const cola = 0;					// кола

if (hamburger || cola || fries) {  // false && false && false
	console.log('Все довольны!');      // Не выполнится условие
} else {
	console.log('Мы уходим!');	   	   // выполнится условие
}  
*/

// Если всё неправда то возвращает последнее ложное значение

let JohnReport, alexReport, samReport, mariaReport = 'done';

console.log(JohnReport || alexReport || samReport || mariaReport);  // done

const hamburger = 3;			// гамбургер
const fries = 3;				// картошка фри
const cola = 0;					// кола
const nuggets = 2;				// наггенсы

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {  // true && false || true && true
	console.log('Все довольны!');      // выполнится условие
} else {
	console.log('Мы уходим!');	   	   
}  

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);  		// 2
console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);  	// 2

console.log(!0); // true
 

