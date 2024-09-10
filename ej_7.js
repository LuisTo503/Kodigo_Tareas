function procesarValores(valores) {
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let acumuladoPares = 0;

    // Asegurarnos de que solo se procesan 10 valores
    if (valores.length !== 10) {
        console.log("Por favor, proporciona exactamente 10 valores.");
        return;
    }

    // Procesar cada valor
    for (let i = 0; i < valores.length; i++) {
        let valor = valores[i];

        // Verificar que el valor es un número
        if (isNaN(valor)) {
            console.log("Valor no válido en la posición " + i + ": " + valor);
            continue; // Saltar al siguiente valor
        }

        // Contar valores negativos
        if (valor < 0) {
            negativos++;
        }

        // Contar valores positivos
        if (valor > 0) {
            positivos++;
        }

        // Contar múltiplos de 15
        if (valor % 15 === 0) {
            multiplosDe15++;
        }

        // Acumular números pares
        if (valor % 2 === 0) {
            acumuladoPares += valor;
        }
    }

    // Mostrar resultados en la consola
    console.log("Cantidad de valores negativos:", negativos);
    console.log("Cantidad de valores positivos:", positivos);
    console.log("Cantidad de múltiplos de 15:", multiplosDe15);
    console.log("Valor acumulado de los números pares:", acumuladoPares);
}

// Ejemplo de valores de prueba
let valoresDePrueba = [12, -5, 30, 7, 15, 18, -20, 25, 9, -3];
procesarValores(valoresDePrueba);
