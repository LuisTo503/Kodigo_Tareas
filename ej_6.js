function calcularDescuentoViaje(origen, destino) {
    let descuento = 0; // Inicializamos el descuento

    // Convertimos las entradas a minúsculas para evitar problemas con las mayúsculas/minúsculas
    origen = origen.toLowerCase();
    destino = destino.toLowerCase();

    // Verificamos si el origen es "palma" y aplicamos los descuentos según el destino
    if (origen === "palma") {
        if (destino === "la costa del sol") {
            descuento = 5;
        } else if (destino === "panchimalco") {
            descuento = 10;
        } else if (destino === "puerto el triunfo") {
            descuento = 15;
        } else {
            return "Destino no válido para descuentos";
        }
    } else {
        return "Origen no válido para descuentos";
    }

    // Devolvemos el descuento aplicado
    return "El descuento aplicado es del " + descuento + "% para el viaje desde " + origen + " a " + destino;
}

// 
console.log(calcularDescuentoViaje("Palma", "La Costa del Sol"));  // Descuento del 5%
console.log(calcularDescuentoViaje("Palma", "Panchimalco"));       // Descuento del 10%
console.log(calcularDescuentoViaje("Palma", "Puerto el Triunfo")); // Descuento del 15%
console.log(calcularDescuentoViaje("Palma", "San Salvador"));      // Destino no válido para descuentos
