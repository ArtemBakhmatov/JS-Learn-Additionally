'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h || 200}px`;
    elem.style.width = `${w || 200}px`;
    //elem.innerHTML = h ?? 200 * w ?? 200; // Тут сначала выполнится умножение , т.к. приоритет выше
    elem.innerHTML = (h ?? 200) * (w ?? 200); // Сначала скобки а потом умножение
}

changeParams(box, newHeight, newWidth);

// let userName;
// console.log(userName ?? 'User');  // User // ?? -> Работает только с null или undefined

// let userName = null;
// console.log(userName ?? 'User');  // User // ?? -> Работает только с null или undefined

// let userName = 0;
// console.log(userName ?? 'User');  // ответ будтет 0

// let userName = NaN;
// console.log(userName ?? 'User');  // ответ будтет NaN

let userName;
let userKey;

console.log(userName ?? userKey ?? 'User'); // User