// Calificaciones de alumnos
/** Se lee un archivo con las calificaciones finales de 200 alumnos.
El formato del registro es el siguiente:
Nro de alumno - Nota final (1 a 10)
Calcular utilizando vectores.
Promedio General del Grupo
1. Cantidad de alumnos aprobados y reprobados, aprueba con 7.
2. Alumnos nota mayor o igual al promedio
3. Porcentaje de alumnos aprobados y reprobados
4. Cantidad de Alumnos con nota mayor a 8
La información obtenida deberá ser grabada en un archivo secuencial cuyo registro
tiene el siguiente formato:
Leyenda del Total – Cantidad del total
* */
// Supongamos que este es nuestro "archivo" de calificaciones.
const grades = [
  { studentID: 1, grade: 5 },
  { studentID: 2, grade: 8 },
  { studentID: 3, grade: 9 },
  { studentID: 4, grade: 10 },
  { studentID: 5, grade: 1 },

  // ... más datos
];

// Inicializamos las variables para hacer los cálculos.
let sum = 0, passed = 0, failed = 0, aboveAvg = 0, aboveEight = 0;

// Calculamos el promedio y contamos aprobados y reprobados.
for (let record of grades) {
  sum += record.grade;
  record.grade >= 7 ? passed++ : failed++;
  if (record.grade >= 8) aboveEight++;
}

let avg = sum / grades.length;


// Contamos los que están por encima del promedio.
for (let record of grades) {
  if (record.grade >= avg) aboveAvg++;
}

// Calculamos porcentajes.
let passRate = (passed / grades.length) * 100;
let failRate = (failed / grades.length) * 100;

// Mostramos los resultados en consola.
console.log("Promedio general:", avg);
console.log("Cantidad aprobados:", passed);
console.log("Cantidad reprobados:", failed);
console.log("Por encima del promedio:", aboveAvg);
console.log("Porcentaje aprobados:", passRate);
console.log("Porcentaje reprobados:", failRate);
console.log("Cantidad con nota > 8:", aboveEight);
