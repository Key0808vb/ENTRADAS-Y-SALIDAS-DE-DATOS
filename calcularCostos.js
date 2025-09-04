// archivo: calcularCostos.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularCostoTotal() {
  rl.question("Ingrese el precio unitario del producto: ", (precioUnitarioInput) => {
    const precioUnitario = parseFloat(precioUnitarioInput);

    if (isNaN(precioUnitario)) {
      console.log("Por favor, ingrese un número válido para el precio unitario.");
      rl.close();
      return;
    }

    rl.question("Ingrese la cantidad de productos comprados: ", (cantidadInput) => {
      const cantidad = parseInt(cantidadInput);

      if (isNaN(cantidad)) {
        console.log("Por favor, ingrese un número válido para la cantidad.");
        rl.close();
        return;
      }

      const total = precioUnitario * cantidad;
      console.log(`El costo total es: $${total.toFixed(2)}`);
      rl.close();
    });
  });
}

console.log("CALCULAR COSTOS");
calcularCostoTotal();