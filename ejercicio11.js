// Definimos una matriz de ejemplo que representa las calificaciones de 30 alumnos en 6 exámenes.
const grades = [
  { studentId: 1, name: "Alice", grades: [80, 85, 88, 90, 92, 86] },
  { studentId: 2, name: "Bob", grades: [75, 80, 85, 88, 90, 95] },
  // ... (Añadir más estudiantes hasta llegar a 30)
];

// Inicializamos las variables para los cálculos
let sumOfAllGrades = 0;
let maxGradeInExam3 = 0;
let nameOfMaxGradeInExam3 = "";
let maxGradeInExam1And6 = 0;
let nameOfMaxGradeInExam1And6 = "";
const sumOfGradesInExams = [0, 0, 0, 0, 0, 0];

// Loop a través de cada estudiante para hacer los cálculos
grades.forEach((student) => {
  // Suma todas las notas de cada alumno para el promedio general
  sumOfAllGrades += student.grades.reduce((a, b) => a + b, 0);

  // Encuentra el alumno con la calificación más alta en el tercer examen
  if (student.grades[2] > maxGradeInExam3) {
      maxGradeInExam3 = student.grades[2];
      nameOfMaxGradeInExam3 = student.name;
  }

  // Encuentra el alumno con la calificación más alta en el primer y sexto examen
  if (student.grades[0] > maxGradeInExam1And6 && student.grades[5] > maxGradeInExam1And6) {
      maxGradeInExam1And6 = Math.min(student.grades[0], student.grades[5]);
      nameOfMaxGradeInExam1And6 = student.name;
  }

  // Suma las calificaciones de cada examen para encontrar el examen con el promedio más alto más tarde
  student.grades.forEach((grade, index) => {
      sumOfGradesInExams[index] += grade;
  });
});

// Cálculo del promedio general
const avgOfAll = sumOfAllGrades / (grades.length * 6);

// Encuentra el examen con el promedio más alto
const maxAvgExam = sumOfGradesInExams.map((sum) => sum / grades.length).reduce((max, cur, index, arr) => (cur > arr[max] ? index : max), 0) + 1;

// Muestra los resultados
console.log(`Promedio General: ${avgOfAll}`);
console.log(`Alumno mayor calif. 3er. examen: ${nameOfMaxGradeInExam3}`);
console.log(`Alumno mayor calif. 1er. y 6to. examen: ${nameOfMaxGradeInExam1And6 || "Ninguno"}`);
console.log(`Examen Prom. Gral + alto: Examen ${maxAvgExam}`);
