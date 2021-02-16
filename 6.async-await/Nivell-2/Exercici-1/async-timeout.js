// Nivell 2
// Exercici 1
// Creu una funció asíncrona que anomeni a una altra que retorni una Promise que
// efectuï la seva resolve amb una demora de 2 segons.
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
    setTimeout(() => {
      resolve(findInArrayId(emp, id));
    }, 2000);
  });
};

const getSalario = (sal, id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(findInArrayId(sal, id));
    }, 4000);
  });
};

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
