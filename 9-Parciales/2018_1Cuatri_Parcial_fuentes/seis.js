function mostrar()
{
    var hora;

    hora = document.getElementById("laHora").value;

    switch (hora) {
        case hora: {
            if (hora >= 6 && hora <=11) {
                alert("Es de mañana.")
            }
            else if (hora >=12 && hora <= 19) {
                alert("Es de tarde.")
            }
            else if (hora > 19 && hora <=24 || hora > 0 && hora < 6) {
                alert("Es de noche.");
            }

            if (hora > 19 && hora <=24) {
                alert("¡A dormir!")
            }

            else {
                alert("La hora no es valida.")
            }
        }
    }
}
