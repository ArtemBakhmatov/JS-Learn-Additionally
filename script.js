// for (let i = 0; i < 3; i++) {		0
// 	console.log(i);						0
// 	for (let j = 0; j < 3; j++) {		1
// 		console.log(j);					2
// 	}									1
// }									0
// 										1
// 										2
// 										2
// 										0
// 										1
// 										2



// let result = '';
// const length = 7;

// for (let i = 0; i < length; i++) {
// 	for (let j = 0; j < i; j++) {
// 		result += '*';
// 	}
// 	result += '\n';
// }

// console.log(result);			   // Ответ // *
// 											// **
// 											// ***
// 											// ****
// 											// *****
// 											// ******

// first: for (let i = 0; i < 3; i++) { // first: -> Эта часть называется меткой
// 	console.log(`First level: ${i}`);						
// 	for (let j = 0; j < 3; j++) {		
// 		console.log(`Second level: ${j}`);		
// 		for (let k = 0; k < 3; k++) {	
// 			if (k === 2) {
// 				continue first;
// 			}
// 			console.log(`Third level: ${k}`);						
// 		}					
// 	}									
// }	

// Ответ
// First level: 0
// Second level: 0
// Third level: 0
// Third level: 1
// First level: 1
// Second level: 0
// Third level: 0
// Third level: 1
// First level: 2
// Second level: 0
// Third level: 0
// Third level: 1

first: for (let i = 0; i < 3; i++) { // first: -> Эта часть называется меткой
	console.log(`First level: ${i}`);						
	for (let j = 0; j < 3; j++) {		
		console.log(`Second level: ${j}`);		
		for (let k = 0; k < 3; k++) {	
			if (k === 2) {
				break first;
			}
			console.log(`Third level: ${k}`);						
		}					
	}									
}	

// Ответ
// First level: 0
// Second level: 0
// Third level: 0
// Third level: 1