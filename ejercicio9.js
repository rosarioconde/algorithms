/**
Se tiene tres vectores denominados: SUR, CENTRO y NORTE. Cada uno de ellos
almacena los nombres de los países de América del Sur, América Central y
América del Norte, respectivamente. Los tres vectores están ordenados
alfabéticamente
Escriba un programa que mezcle los tres vectores anteriores, generando un cuarto
vector denominado AMERICA, en el que aparezcan los nombres de todos los
países del continente ordenados alfabéticamente.
 */

// Supongamos que estos son nuestros vectores.
const south = [
  "Argentina",
  "Bolivia",
  "Brasil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Guyana",
  "Paraguay",
  "Perú",
  "Surinam",
  "Uruguay",
  "Venezuela",
];

const center = [
  "Belice",
  "Costa Rica",
  "El Salvador",
  "Guatemala",
  "Honduras",
  "Nicaragua",
  "Panamá",
];

const north = [
  "Canadá",
  "Estados Unidos",
  "México",
];

// Inicializamos el vector que contendrá a todos los países.
let america = [];

// Recorremos los vectores y los agregamos al vector "america".
for (let country of south) {
  america.push(country);
}

for (let country of center) {
  america.push(country);
}

for (let country of north) {
  america.push(country);
}

// Ordenamos el vector "america".
america.sort();

// Mostramos el resultado en consola.
console.log(america);
