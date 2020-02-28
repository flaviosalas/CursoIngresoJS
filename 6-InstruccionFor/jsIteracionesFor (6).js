function mostrar() {

    var numero;
    var contadorpares = 0;

    numero = parseInt(prompt("Ingrese un numero"));
    while (isNaN(numero)) {
        numero = parseInt(prompt("Numero invalido. Ingrese nuevamente"));
    }

    for (var i = 1 ; i <= numero ; i++) {
        if (i % 2 == 0) {
            //Aca solo entra cuando i tiene un valor par
            console.log(i);
            contadorpares++;
        }
    }

    console.log("Cantidad de pares encontrados: " + contadorpares);






}//FIN DE LA FUNCIÓN