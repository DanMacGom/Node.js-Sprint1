// Nivell 2
// Exercici 3
// Invoqui la primera Promise getEmpleado i posteriorment getSalario, niant
// l'execució de les dues promises.
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

const findInArrayId = (arr, myId) => {
  return arr.find((x) => x.id === myId)
};

const getEmpleado = (empl, id) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const query = findInArrayId(empl, id);
    resolve(query);
  }, 1000);
})

const getSalario = (salar, id) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const query = findInArrayId(salar, id);
    resolve(query);
  }, 1000);
})

getEmpleado(employees, 1)
.then((res) => {
  console.log(res);
  return getSalario(salaries, 1);
}).then((res) => {
  console.log(res);
});
