// Matriz de 50 x 50 con ceros, excepto la diagonal principal que tendrá unos.
// Crear una matriz 50x50
let matrix = Array.from({ length: 50 }, () => Array.from({ length: 50 }, () => 0));

// Rellenar la diagonal principal con unos
for (let i = 0; i < matrix.length; i++) {
  matrix[i][i] = 1;
}

// Mostrar la matriz en la consola (opcional)
console.log(matrix);