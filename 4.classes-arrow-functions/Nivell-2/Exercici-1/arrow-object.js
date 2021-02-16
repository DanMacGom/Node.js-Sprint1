// Nivell 2
// Exercici 1
// Crear una arrow function que, rebent un paràmetre, retorni un objecte amb un
// atribut que tingui com a valor el paràmetre rebut.

// If we only want the function to return
// the object:
((x) => {
  { valor: x }
})(4);

// To print it:
((x) => {
  console.log({ valor: x });
})(4);
