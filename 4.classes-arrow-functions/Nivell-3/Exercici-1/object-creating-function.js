// Nivell 3
// Exercici 1
// Crear una function creadora d'objectes, abstraient la definició de les
// classes. Invocar amb diferents definicions.
function Animal(name) {
  this.name = name;
  this.say = () => console.log("I am a", this.name);
}

function AnimalCreator() {
  this.create = name => new Animal(name);
};

let animals = [];
let animalCreator = new AnimalCreator();

animals.push(animalCreator.create("Dog"));
animals.push(animalCreator.create("Cat"));
animals.push(animalCreator.create("Horse"));
animals.push(animalCreator.create("Turtle"));

for (let i = 0; i < animals.length; i++) {
  animals[i].say();
}
