function mostrar() {


    var laHora;
    
    laHora = parseInt(document.getElementById('hora').value);

    switch (true) {
        case (laHora >= 7 && laHora <= 11):
            alert("Es de Mañana.");
    }

    switch (true) {
        case (laHora >= 12 && laHora <= 19):
            alert("Es de Tarde.");
    }

    switch (true) {
        case (laHora >= 20 && laHora <= 24 || laHora >= 0 && laHora <= 6):
            alert("Es de Noche.");
    }

    switch (true) {
        case (laHora > 24 || laHora < 0 ):
            alert("Esa hora no existe.");
    }





}//FIN DE LA FUNCIÓN