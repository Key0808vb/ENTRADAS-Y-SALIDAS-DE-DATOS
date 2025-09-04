console.log("PROMEDIO DE NOTAS");
const readline = require('readline').createInterface({
    _input: process.stdin,
    get input() {
        return this._input;
    },
    set input(value) {
        this._input = value;
    },
    output: process.stdout,
});

function calcularPromedio() {
    let notas = [];
    let contador = 0;

    function solicitarNota() {
        readline.question(`Ingrese la nota ${contador + 1}: `, nota => {
            const notaNumerica = parseFloat(nota);

            if (isNaN(notaNumerica)) {
                console.log('Por favor, ingrese un número válido.');
                return solicitarNota();
            }

            notas.push(notaNumerica);
            contador++;

            if (contador < 3) {
                solicitarNota();
            } else {
                const promedio = notas.reduce((a, b) => a + b, 0) / 3;
                console.log(`El promedio de las notas es: ${promedio}`);
                readline.close();
            }
        });
    }

    solicitarNota();
}


calcularPromedio();