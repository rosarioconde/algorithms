//Ídem ejercicio anterior, pero el elemento duplicado deberá ser eliminado del vector.

let arreglo = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7];

for(let i = 0; i < arreglo.length - 1; i++) {
    if(arreglo[i] === arreglo[i+1]) {
        arreglo.splice(i, 1);
        i--;
    }
}
console.log(arreglo);
