// EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
//de lo siguiente:
//• Examen =20%
//• tareas = 40%
//• asistencia = 10%
//• investigación = 30%
//Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.

function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    // Cálculo de la nota final basado en los porcentajes asignados
    let notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);
    
    // Mostramos los datos del alumno y la nota final
    console.log("Nombre del Alumno:", nombre);
    console.log("Carnet del Alumno:", carnet);
    console.log("Nota Final:", notaFinal.toFixed(2)); // .toFixed(2) para mostrar solo 2 decimales
}

// 
calcularNotaFinal("Juan Pérez", "AB12345", 85, 90, 95, 88);

// Salida:
// Nombre del Alumno: Juan Pérez
// Carnet del Alumno: AB12345
// Nota Final: 88.10
