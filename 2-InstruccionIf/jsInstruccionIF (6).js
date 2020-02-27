function mostrar()
{
    var edad;

    edad = parseInt(document.getElementById("edad").value);

    if (edad >= 18) {
        alert("Es mayor de edad");
    } 
    
    else if (edad >= 13 && edad <=18) {
        alert("es adolescente");
    }

    else if (edad < 13) {
        alert("es menor de edad");
    }



}//FIN DE LA FUNCIÓN