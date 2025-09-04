console.log("CONVERTIDOR DE KILOMETROS");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Ingrese la cantidad de kilómetros: ', kilometros => {
    const km = parseFloat(kilometros);

    if (isNaN(km)) {
        console.log('Por favor, ingrese un número válido.');
        readline.close();
        return;
    }

    const millas = km * 0.621371;
    console.log(`${km} kilómetros son equivalentes a ${millas.toFixed(2)} millas.`);
    readline.close();
});