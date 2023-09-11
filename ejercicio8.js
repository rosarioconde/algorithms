/**
 * 
 * Ej. 1-8
Se lee un archivo con la cantidad de toneladas de cereal cosechadas el año anterior.
El formato del registro es el siguiente:
Mes - Cantidad
Calcular utilizando vectores.
1. Promedio mensual.
2. Cantidad de meses con cosecha mayor al promedio
3. Cantidad de meses con cosecha menor o igual al promedio
4. Mes con mayor cosecha
5. Mes con menor cosecha
La información obtenida deberá ser grabada en un archivo secuencial cuyo registro
tiene el siguiente formato:
Leyenda del Total – Cantidad del total
 * * */

// Supongamos que este es nuestro "archivo" de cosechas.
const harvests = [
  { month: "Enero", harvest: 100 },
  { month: "Febrero", harvest: 200 },
  { month: "Marzo", harvest: 300 },
  { month: "Abril", harvest: 400 },
  { month: "Mayo", harvest: 500 },
  { month: "Junio", harvest: 600 },
  { month: "Julio", harvest: 700 },
  { month: "Agosto", harvest: 800 },
  { month: "Septiembre", harvest: 900 },
  { month: "Octubre", harvest: 1000 },
  { month: "Noviembre", harvest: 1100 },
  { month: "Diciembre", harvest: 1200 },
];

// Inicializamos las variables para hacer los cálculos.
//let sum = 0, aboveAvg = 0, belowAvg = 0, max = 0, min = 0;

let sum = 0, aboveAvg = 0, belowAvg = 0;
let max = Number.NEGATIVE_INFINITY, min = Number.POSITIVE_INFINITY;
let maxMonth = "", minMonth = "";

// Calculamos el promedio y contamos los que están por encima y por debajo.
for (let record of harvests) {
  sum += record.harvest;
}

let avg = sum / harvests.length;

for (let record of harvests) {
  record.harvest >= avg ? aboveAvg++ : belowAvg++;
}

// Calculamos el máximo y el mínimo.
for (let record of harvests) {
  // if (record.harvest > max) max = record.harvest;
  // if (record.harvest < min) min = record.harvest;
  if (record.harvest > max) {
    max = record.harvest;
    maxMonth = record.month;
  }
  if (record.harvest < min) {
    min = record.harvest;
    minMonth = record.month;
  }
}

// Mostramos los resultados en consola.
console.log("Promedio mensual:", avg);
console.log("Cantidad de meses con cosecha mayor al promedio:", aboveAvg);
console.log("Cantidad de meses con cosecha menor o igual al promedio:", belowAvg);
console.log("Mes con mayor cosecha:", maxMonth, "con", max);
console.log("Mes con menor cosecha:", minMonth, "con", min);

