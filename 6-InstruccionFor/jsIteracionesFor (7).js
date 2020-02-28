function mostrar() {

    var numero;
    var contadordivisores = 0;

    numero = parseInt(prompt("Ingrese un numero"));
    while (isNaN(numero)) {
        numero = parseInt(prompt("Numero invalido. Ingrese nuevamente"));
    }

    for (var i = 2 ; i <= numero/2 ; i++) {
        if (numero % i == 0) {
            //Aca solo entra cuando i tiene un valor par
            console.log(i);
            contadordivisores++;
        }
    }

    console.log("Cantidad de divisores encontrados: " + contadordivisores);






}//FIN DE LA FUNCIÓN