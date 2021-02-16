// Nivell 1
// Exercici 2
// Creu una funció asíncrona que, rebent un aneu d'empleat, imprimeixi per
// pantalla el nom de l'empleat i el seu salari
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

const getEmployeeSalary = (id) => {
  return new Promise((resolve, reject) => {
    resolve([findInArrayId(employees, id), findInArrayId(salaries, id)]);
  });
}

async function fetchEmployeeSalary(id) {
  const fetchObject = await getEmployeeSalary(id);
  console.log(`Employee name: ${fetchObject[0].name}, Salary: ${fetchObject[1].salary}.`);
}

fetchEmployeeSalary(3);
