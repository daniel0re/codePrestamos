export function calcularTotal(cantidad, plazo) {
    let totalCantidad = 0;
    
    if(cantidad <= 1000) {
        totalCantidad = cantidad*.25;
    } else if (1000 < cantidad  && cantidad <= 5000){
        totalCantidad = cantidad*.2;
    } else if (5000 < cantidad && cantidad <= 10000){
        totalCantidad = cantidad*.15;
    } else {
        totalCantidad = cantidad*.1;
    }

    // Calcular el plazo
    let totalPlazo = 0;
    switch (plazo) {
        case 3:
            totalPlazo = cantidad*.05;
            break;
        case 6:
            totalPlazo = cantidad*.1;
            break;
        case 12:
            totalPlazo = cantidad*.15;
            break;
        case 24:
            totalPlazo = cantidad*.2;
            break;
        default:
            break;
    }

    return totalCantidad + totalPlazo + cantidad;
}

