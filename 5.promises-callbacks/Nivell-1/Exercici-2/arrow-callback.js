// Nivell 1
// Exercici 2
// Crear una arrow function que, rebent un paràmetre i una function callback,
// li passi a la funció un missatge o un altre (que s'imprimirà per consola) en
// funció del paràmetre.
const message = (msg) => {
  console.log(msg);
}

const myFunc = (param, callback) => {
  if (param > 0) {
    callback(`Parameter ${param} is positive :).`);
  } else {
    callback(`Parameter ${param} is negative :(.`)
  }
}

myFunc(3, message);
myFunc(-2, message);
