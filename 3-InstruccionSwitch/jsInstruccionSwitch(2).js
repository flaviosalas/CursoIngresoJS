function mostrar()
{
//tomo la edad  
var mesDelAño 

mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Enero": 
    case "Febrero":
    case "Marzo": 
    case "Abril":
    case "Mayo":
    case "Junio":
    alert("Todavía no empieza el invierno.");
    break;
}

switch (mesDelAño) {
    case "Julio":
    case "Agosto": 
    alert("Abrigate que hace frio!");
    break;
}

switch (mesDelAño) {
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    alert("Ya pasamos el frío, ahora calor!");
    break;
}

}
