/* 
1)   Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива. 
*/

/* 
const arr = [1, 4, 6, 5, 8, 2, 9];
//const evenNumbers = arr.filter(element => !(element % 2)); // выводим четные числа
const evenNumbers = [];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
    }
}
console.log(evenNumbers); // [ 4, 6, 8, 2 ]

let answer = evenNumbers.reduce((calculator, element) => calculator + Math.sqrt(element), 0).toFixed();
console.log(answer); // 9 
*/

///////////// Собеседования на JavaScript. Как не облажаться? //////////////////

// Filter 
const filterThis = [2, 4, 3, 6, 8, 9];

const filter = (arr, func) => {
    const filteredArr = [];
    for (let elem of arr) {
        if (func(elem)) {
            filteredArr.push(elem);
        }
    }
    return filteredArr;
};

console.log(filter(filterThis, (elem) => elem % 3 === 0)); // [ 3, 6, 9 ]

// some
const someOfThis = ['Java', 'JavaScript', 'Python'];

const some = (arr, func) => {
    for (let elem of arr) {
        if (func(elem)) {
            return true;
        }
    }
    return false;
};

console.log(some(someOfThis, (elem) => elem === 'Java')); // true

// метод .some() -> возвращает булиновое значение

// map
const mapMe = [1000, 800, 2400, 500];

const map = (arr, func) => {
    const mappedArr = [];
    for (let elem of arr) {
        mappedArr.push(func(elem));
    }
    return mappedArr;
};

console.log(map(mapMe, (elem) => elem + 200));  // [ 1200, 1000, 2600, 700 ]