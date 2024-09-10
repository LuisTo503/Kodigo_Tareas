//Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
//Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
//aumento. Deberá demostrar los datos del empleado y el aumento salarial.



function calcularAumento(nombre, salario, categoria) {
    let aumento; // Variable para el aumento salarial

    // Usamos switch para determinar el aumento según la categoría
    switch(categoria.toUpperCase()) {
        case 'A':
            aumento = 0.15;
            break;
        case 'B':
            aumento = 0.30;
            break;
        case 'C':
            aumento = 0.10;
            break;
        case 'D':
            aumento = 0.20;
            break;
        default:
            console.log("Categoría no válida");
            return;
    }

    // Cálculo del aumento y nuevo salario
    let aumentoSalarial = salario * aumento;
    let nuevoSalario = salario + aumentoSalarial;

    // Mostrar los datos del empleado y el aumento salarial
    console.log("Nombre del Empleado:", nombre);
    console.log("Salario Base:", salario.toFixed(2));
    console.log("Categoría:", categoria);
    console.log("Aumento:", (aumento * 100) + "%");
    console.log("Aumento Salarial:", aumentoSalarial.toFixed(2));
    console.log("Nuevo Salario:", nuevoSalario.toFixed(2));
}

// 
calcularAumento("Ana López", 1000, 'B');

// Salida esperada:
// Nombre del Empleado: Ana López
// Salario Base: 1000.00
// Categoría: B
// Aumento: 30%
// Aumento Salarial: 300.00
// Nuevo Salario: 1300.00
