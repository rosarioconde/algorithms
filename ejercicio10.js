/*
Se tienen dos vectores: CINES (50 elementos) y TEATROS (70 elementos).
El primero contiene el nombre de todos los cines de la ciudad ordenados
alfabéticamente en forma ascendente.
El segundo contiene el nombre de todos los teatros de la ciudad ordenados
alfabéticamente en forma descendente.
Escriba un programa que mezcle los dos vectores anteriores formando un tercer
vector, ordenado alfabéticamente en forma ascendente. */

// Supongamos que estos son nuestros vectores.
const cinemas = [
  "Cine 1",
  "Cine 2",
  "Cine 3",
  "Cine 4",
  "Cine 5",
  "Cine 6",
  "Cine 7",
  "Cine 8",
  "Cine 9",

  // ... más datos
];

const theaters = [
  "Teatro 1",
  "Teatro 2",
  "Teatro 3",
  "Teatro 4",
  "Teatro 5",
  "Teatro 6",
  "Teatro 7",
  "Teatro 8",
  "Teatro 9",

  // ... más datos
];

// Inicializamos el vector que contendrá a todos los cines y teatros.
let places = [];

// Recorremos los vectores y los agregamos al vector "places".
for (let place of cinemas) {
  places.push(place);
}

for (let place of theaters) {
  places.push(place);
}

// Ordenamos el vector "places".
places.sort();

// Mostramos el resultado en consola.
console.log(places);

