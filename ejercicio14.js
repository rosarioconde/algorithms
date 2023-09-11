// Encontrar el valor más grande en cada fila y columna de una matriz 20 x 20
const fs = require('fs'); // Importamos el módulo de sistema de archivos para escribir en un archivo.

// Crear una matriz 20x20 con números aleatorios del 1 al 100.
let A = Array.from({ length: 20 }, () => Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1));

// Matriz para almacenar el valor más grande de cada fila y columna
let maxValues = [];

// Recorre cada fila para encontrar el valor máximo
for (let i = 0; i < A.length; i++) {
  let maxInRow = -Infinity; // Inicializar con un valor muy pequeño
  for (let j = 0; j < A[i].length; j++) {
    if (A[i][j] > maxInRow) {
      maxInRow = A[i][j];
    }
  }
  maxValues.push({ type: 'Fila', index: i, value: maxInRow });
}

// Recorre cada columna para encontrar el valor máximo
for (let j = 0; j < A[0].length; j++) {
  let maxInCol = -Infinity; // Inicializar con un valor muy pequeño
  for (let i = 0; i < A.length; i++) {
    if (A[i][j] > maxInCol) {
      maxInCol = A[i][j];
    }
  }
  maxValues.push({ type: 'Columna', index: j, value: maxInCol });
}

// Guarda los valores máximos en un archivo
fs.writeFileSync('maxValues.txt', maxValues.map(v => `${v.type} - ${v.index} - ${v.value}`).join('\n'));

// Mostrar los resultados en consola
console.log('Los valores máximos han sido escritos en el archivo maxValues.txt');
