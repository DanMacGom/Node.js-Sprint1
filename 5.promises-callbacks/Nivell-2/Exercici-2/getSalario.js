// Nivell 2
// Exercici 2
// Creu una altra arrow function getSalario que rebi com a paràmetre un objecte
// emprat i retorni el seu salari.
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
const getSalario = (salar, id) => Promise.resolve(findInArrayId(salar, id));

console.log(getSalario(salaries, 1));
