//Ídem ejercicio 2, pero el vector está desordenado.

let arreglo = [3, 1, 4, 1, 5, 6, 2, 2, 3, 7];

arreglo.sort((a, b) => a - b);

for(let i = 0; i < arreglo.length - 1; i++) {
    if(arreglo[i] === arreglo[i+1]) {
        arreglo[i+1] = '*';
    }
}
console.log(arreglo);
