// Nivell 3
// Exercici 1
// Crea una matriu de deu funcions i empleni-la mitjançant un bucle.
// Cada funció comptarà del 0-9 imprimint-ho per pantalla.
// Invoqui cada funció de l'array iterativament.
// Haurà d'imprimir-se per pantalla el compte de 0-9 deu vegades
let func_array = [];
let counter = 1;

function numbers(i) {
	for (let j = 0; j < 10; j++) {
		console.log(j);
	}
}

// Array creation.
for (let i = 0; i < 10; i++) {
	func_array[i] = numbers;
}

function array_invoker(func_array, cntr) {
	if (cntr > 10) {

		return;
	} else {

		func_array[cntr - 1](cntr);
		return array_invoker(func_array, cntr + 1);
	}
}

array_invoker(func_array, counter);
