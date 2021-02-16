// Nivell 3
// Exercici 1
// Capturi tots els errors possibles del Nivell 2.
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

const error1 = false;
const error2 = false;

const getEmpleado = (emp, id) => {
  return new Promise((resolve, reject) => {
    if (!error1) {
      setTimeout(() => {
        resolve(findInArrayId(emp, id));
      }, 2000);
    } else {
      err = new Error("Something went wrong while fetching Empleados.")
      reject(err);
    }
  });
};

const getSalario = (sal, id) => {
  return new Promise((resolve, reject) => {
    if (!error2) {
      setTimeout(() => {
        resolve(findInArrayId(sal, id));
      }, 4000);
    } else {
      err = new Error("Something went wrong while fetching Salarios.")
      reject(err);
    }
  });
};

async function fetchingEmpleados(id) {
  try {
    const fetchEmp = await getEmpleado(employees, id);
    console.log(fetchEmp);
  } catch (err) {
    console.log(err.message);
  }
}

async function fetchingSalarios(id) {
  try {
    const fetchSal = await getSalario(salaries, id);
    console.log(fetchSal);
  } catch (err) {
    console.log(err.message);
  }
}

fetchingEmpleados(2)
  .then(fetchingSalarios(3));
