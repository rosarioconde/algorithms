/**
 * Ordenar una lista de números en orden ascendente usando el método sort de JavaScript
 *  */

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
arr.sort((a, b) => a - b);
console.log(arr);  // [1, 1, 2, 3, 4, 5, 5, 6, 9]
