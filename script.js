'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block); // null

// оператор ? отвечает существует ли данный элемент, если не то будет undefined

// console.log(block.textContent); // будет ошибка и код дальше небудет работать

// if(block) {
//     console.log(block.textContent); 
// }

// через условие код не сломается будет дальше работь вниз

//console.log(block?.textContent);   // undefined
//block?.textContent = '123'; // Будет ошибка так как изначально undefined

console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('Hello!');
    }
}

userData.say(); // код работает
//userData.hey(); // Будет ошибка , такого метода не сущ-ет
userData.hey?.(); // Ошибки не будет

//console.log(userData.skills.js); // будет ошибка

// if(userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js); // ошибки не будет так как условие не сработает
// }

console.log(userData.skills?.js);  // undefined
