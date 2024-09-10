// ejercicio 1: crear una funcion que en base a la edad de ingreso
// el usuario devolvera un mensaje, si la persona es mayor de edad o no. 
// Utilizar para la condicion el operador ternario.

function verificarEdad(edad) {
    return edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

}

//resultado
console.log(verificarEdad(20));
console.log(verificarEdad(15));