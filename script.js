'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

console.log(boxesQuery); // NodeList(3) [div.box, div.box, div.box] -> Узлы (она более полезнее)
console.log(boxesGet);   // HTMLCollection(3) [div.box, div.box, div.box] -> элементы
//console.log(document.body.children); // HTMLCollection(4) [div.box, div.box, div.box, script] -> Все дети

boxesQuery[0].remove();
boxesGet[0].remove();

console.log(boxesQuery); // NodeList(3) [div.box, div.box, div.box] статичное изменение
console.log(boxesGet);   // HTMLCollection [div.box] текущее изменение

console.log(Array.from(boxesGet));  // [div.box]

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
}

console.log(boxesQuery); // NodeList(3) [div.box, div.box, div.box]
console.log(boxesGet);   // HTMLCollection(6) [div.box, div.box, div.box, div.box, div.box, div.box]

///////////////////////////////////////////////////////////////////////////////

boxesQuery.forEach(box => {
    if (box.matches('.this')) {
        console.log(box);  // <div class="box this"></div>
    }
});


// <div class="wrapper">
    //<div class="box"></div>
    //<div class="box this"></div>
    //<div class="box"></div>
// </div>

//console.log(boxesQuery[0].closest('.wrapper')); выведем блок wrapper