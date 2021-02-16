// Nivell 3
// Exercici 1
// Fixi un element catch a la invocació de la fase anterior que capturi
// qualsevol error i l'imprimeixi per consola.

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

const error1 = true;
const error2 = false;

const getEmpleado = (empl, id, error1) => new Promise((resolve, reject) => {
  if (!error1) {
    setTimeout(() => {
      const query = findInArrayId(empl, id);
      resolve(query);
    }, 1000);
  } else {
    err = new Error("Something went wrong!");
    reject(err);
  }
})

const getSalario = (salar, id, error2) => new Promise((resolve, reject) => {
  if (!error2) {
    setTimeout(() => {
      const query = findInArrayId(salar, id);
      resolve(query);
    }, 1000);
  } else {
    err = new Error("Something went wrong!");
    reject(err);
  }
})

getEmpleado(employees, 1, error1).then((res) => {
  console.log(res);
  return getSalario(salaries, 1, error2);
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err.message);
});
