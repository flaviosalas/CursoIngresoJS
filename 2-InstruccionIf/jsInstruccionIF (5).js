function mostrar()
{

    var edad;

    edad = document.getElementById("edad").value;

    if (edad < 13 || edad > 18) {
        alert("no es adolescente");
    }


}//FIN DE LA FUNCIÓN