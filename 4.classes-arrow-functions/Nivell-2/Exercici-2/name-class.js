// Nivell 2
// Exercici 2
// Crear una classe Persona que rebi un paràmetre 'nom' a l'ésser creat. La classe
// inclourà un mètode decirNombre que imprimeixi per consola el paràmetre 'Nom'.
// Invocar el mètode decirNombre des de fora de la classe.
class Persona {
  constructor(nom) {
    this.nom = nom
  }

  decirNombre() {
    console.log(this.nom);
  }
}

const pers = new Persona("Dani");
pers.decirNombre();
