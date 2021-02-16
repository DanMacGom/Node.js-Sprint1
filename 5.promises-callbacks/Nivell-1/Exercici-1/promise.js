// Nivell 1
// Exercici 1
// Crear una function que retorni una Promise que invoqui la funcion resolve() o
// bé reject() que rep. Invocar-la des de fora pasandole totes dues funcions que
// imprimeixin un missatge diferent en cada cas.
function myFunc() {
  const myPromise = new Promise((resolve, reject) => {
    if(error) {
      setTimeout(() => {
        const msg = "Everything went well!";
        resolve(msg);
      }, 2000);
    } else {
      err = new Error("Something went wrong...")
      reject(err);
    }
  })

  return myPromise;
}

const error = true;

myFunc()
  .then((res) => {
    console.log(res);
})
  .catch((err) => {
    console.log(err.message);
  });
