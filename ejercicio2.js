/**Dado un arreglo unidimensional de números enteros, ordenados crecientemente,
escriba un programa que elimine todos los elementos repetidos.
Considere que de haber valores repetidos, éstos se encontrarán en posiciones
consecutivas del arreglo.
Uno de los elementos repetidos deberá ser reemplazado por un asterisco.
**/

let arreglo = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7];
for(let i = 0; i < arreglo.length - 1; i++) {
    if(arreglo[i] === arreglo[i+1]) {
        arreglo[i+1] = '*';
    }
}

console.log(arreglo);
