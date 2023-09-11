/**
 * Se tiene un archivo secuencial con datos de la facturación mensual de un comercio.
El archivo contiene de uno a n registros.
Para cada día del mes puede haber de 0 a n registros.
El archivo esta desordenado.
El formato del registro es el siguiente:
NroFact – Día – Mes – Año - Código de Producto - Importe
El Código de Producto contiene los valores: PR1 ó PR2)
Determinar (utilizando matrices) la siguiente información:
1. Venta diaria - Total y por producto.
2. Venta Mensual - Total y por producto.
3. Promedios Diarios - Total y por producto.
4. Producto con mayor venta
5. Producto con menor venta
La información obtenida deberá ser grabada en un archivo secuencial cuyo registro
tiene el siguiente formato: Leyenda del Total – Cantidad del total 
 * 
 */

// Datos de ejemplo que simulan el archivo de facturación
const records = [
  { invoiceNo: 1, day: 1, month: 1, year: 2023, productCode: 'PR1', amount: 100 },
  { invoiceNo: 2, day: 1, month: 1, year: 2023, productCode: 'PR2', amount: 200 },
  { invoiceNo: 2, day: 1, month: 9, year: 2023, productCode: 'PR2', amount: 10000 },
  // ... (Añadir más registros)
];

// Matriz para almacenar la venta diaria y mensual, por producto
let dailySales = {};
let monthlySales = {};

// Inicializar variables para almacenar la venta total y por producto
let totalSales = 0;
let salesByProduct = {};

// Loop a través de cada registro para realizar los cálculos
records.forEach(record => {
  const key = `${record.day}-${record.month}-${record.year}`;
  const monthKey = `${record.month}-${record.year}`;

  // Sumar las ventas diarias y mensuales, total y por producto
  dailySales[key] = dailySales[key] || { PR1: 0, PR2: 0 };
  dailySales[key][record.productCode] += record.amount;

  monthlySales[monthKey] = monthlySales[monthKey] || { PR1: 0, PR2: 0 };
  monthlySales[monthKey][record.productCode] += record.amount;

  // Sumar la venta total y por producto
  totalSales += record.amount;
  salesByProduct[record.productCode] = (salesByProduct[record.productCode] || 0) + record.amount;
});

// Calcula los promedios diarios
let dailyAvg = {};
Object.keys(dailySales).forEach(key => {
  dailyAvg[key] = {
    PR1: dailySales[key].PR1 / 30,
    PR2: dailySales[key].PR2 / 30
  };
});

// Encuentra el producto con mayor y menor venta
let maxProduct = Object.keys(salesByProduct).reduce((a, b) => salesByProduct[a] > salesByProduct[b] ? a : b);
let minProduct = Object.keys(salesByProduct).reduce((a, b) => salesByProduct[a] < salesByProduct[b] ? a : b);

// Mostrar los resultados (Aquí podría guardarlos en un archivo)
console.log("Venta diaria:", dailySales);
console.log("Venta mensual:", monthlySales);
console.log("Promedio diario:", dailyAvg);
console.log("Producto con mayor venta:", maxProduct);
console.log("Producto con menor venta:", minProduct);
