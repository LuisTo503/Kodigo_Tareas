//EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
//calcular cual número es el mayor y devolverlo. 



function numeroMayor(num1, num2) {
    // Comparación de los dos números
    if (num1 > num2) {
        return num1 + " es mayor que " + num2;
    } else if (num2 > num1) {
        return num2 + " es mayor que " + num1;
    } else {
        return "Ambos números son iguales";
    }
}

// Ejemplo de uso:
console.log(numeroMayor(10, 5));  // "10 es mayor que 5"
console.log(numeroMayor(7, 12));  // "12 es mayor que 7"
console.log(numeroMayor(8, 8));   // "Ambos números son iguales"
