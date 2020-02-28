function mostrar() {

    var numero;
    var i = 2;

    numero = parseInt(prompt("Ingrese un numero"));
    while (isNaN(numero)) {
        numero = parseInt(prompt("Numero invalido. Ingrese un numero nuevamente"));
    }

    if (numero % i !== 0) {
        alert("El numero ingresado es primo.");
    }
    else {
        alert("El numero ingresado no es primo.");
    }

}