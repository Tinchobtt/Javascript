const naftaPorTrayecto = (consumo, trayecto)=>{
    return trayecto / consumo;
}
const precioPorTrayecto = (consumo, trayecto, precioNafta)=>{
    let nafta = naftaPorTrayecto(consumo, trayecto);
    return nafta * precioNafta;
}
const kmsDisponibles = (consumo, nafta)=>{
    return nafta * consumo;
}
let out = false;
while(!out){
    const menu = parseInt(prompt('1 - Gasto de nafta por trayecto \n2 - Precio de nafta por trayecto \n3 - Cantidad de kms con nafta disponible \n4 - Salir'));
    let consumo, trayecto, nafta, precioNafta;
    switch(menu){
        case 1: 
            consumo = parseFloat(prompt('Ingrese el consumo de su auto (En general es entre 8 a 12 km por litro): '));
            trayecto = parseFloat(prompt('Ingresa la cantidad de kilometros a recorrer: '));
            alert(`Necesitas ${naftaPorTrayecto(consumo, trayecto)} litro de nafta para recorrer ${trayecto} kilometros`);
            break;
        case 2:
            consumo = parseFloat(prompt('Ingrese el consumo de su auto (En general es entre 8 a 12 km por litro): '));
            trayecto = parseFloat(prompt('Ingrese la cantidad de kilometros a recorrer: '));
            precioNafta = parseFloat(prompt('Ingrese el precio de 1L de nafta: '));
            alert(`Para recorrer ${trayecto} kilometros debes gastar $${precioPorTrayecto(consumo, trayecto, precioNafta)}`);
            break;
        case 3:
            consumo = parseFloat(prompt('Ingrese el consumo de su auto (En general es entre 8 a 12 km por litro): '));
            nafta = parseFloat(prompt('Ingrese la cantidad de nafta disponible (en litros): '));
            alert(`Con ${nafta} litros de nafta podes recorrer ${kmsDisponibles(consumo, nafta)} kilometros`);
            break;
        default:
            out = true;
    }
}