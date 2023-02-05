// Тип данных Symbol -> они должны для того чтобы создавать уникальные индификаторы, чем они и являются
// Symbol-ы они будут уникальны и неизменяемы, применяем к свойствам объекта

/* 
const obj = {
    'name': 'Test',
    [Symbol('id')]: 1,
    getId: function() {
        return this[id];
    }
};

console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

for(let value of obj) console.log(value); 
*/

// let id = Symbol('id');
// let id2 = Symbol('id');

// console.log(id === id2); // false
// obj[id] = 1;

// console.log(obj[id]); // 1

//console.log(obj.getId()); 

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol('id')]: 123
};

// Сторонний код библиотеки 

myAwesomeDB.db = '325635225';
console.log(myAwesomeDB["id"]);
console.log(myAwesomeDB);