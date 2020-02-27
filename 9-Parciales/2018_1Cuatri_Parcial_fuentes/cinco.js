function mostrar() {
    var planetas;
    var tierra;
    var venus;
    var mercurio;

    planetas = prompt("Escriba el nombre de un planeta:");

    switch (planetas) {
        case "tierra":
            alert("Acá vivimos.");
            break;
        case "venus":
        case "mercurio":
            alert("Acá hace más calor.");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno": 
            alert("Acá hace más frío");
            break;
            default: 
            alert("Ese no es un planeta. Ingrese nuevamente.");
        }
}
