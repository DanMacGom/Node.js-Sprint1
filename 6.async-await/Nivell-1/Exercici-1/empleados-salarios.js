// Nivell 1
// Exercici 1
// Donats els objectes Empleados i Salarios, creu una arrow function getEmpleado
// que retorni una Promise efectuant la cerca en l'objecte pel seu aneu. Creu una
// altra arrow function getSalario que rebi com a paràmetre un objecte emprat i
// retorni el seu salari.
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
  return arr.find((x) => x.id === myId);
};

const getEmpleado = (emp, id) => {
  return new Promise((resolve, reject) => {
    resolve(findInArrayId(emp, id));
  });
}

const getSalario = (sal, id) => {
  return new Promise((resolve, reject) => {
    resolve(findInArrayId(sal, id));
  });
}

async function fetchingEmpleados(id) {
  const fetchEmp = await getEmpleado(employees, id);
  console.log(fetchEmp);
}

async function fetchingSalarios(id) {
  const fetchSal = await getSalario(salaries, id);
  console.log(fetchSal);
}

fetchingEmpleados(2)
  .then(fetchingSalarios(3));
