// Nivell 2
// Exercici 2
// Donats els objectes emprats i salaris, creu una arrow function getEmpleado
// que retorni una Promise efectuant la cerca en l'objecte pel seu id.
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const findInArrayId = (arr, myId) => arr.find((x) => x.id === myId);

const getEmpleado = (empl, id) => Promise.resolve(findInArrayId(empl, id));

console.log(getEmpleado(employees, 1));
