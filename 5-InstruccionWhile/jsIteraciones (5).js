function mostrar() {

    var sexo = prompt("Ingrese f o m.");

    /*
    
    while (!(sexo == "f" || sexo == "m")) {
        sexo = prompt("Error. Ingrese nuevamente.");

    }
    
    document.getElementById('Sexo').value = sexo;
    
    */

    while ( sexo != "f" && sexo != "m") {
        sexo = prompt("Error. Ingrese nuevamente.");

    }

    document.getElementById('Sexo').value = sexo;


}

/*
Quiero entrar al while cuando el dato es INVALIDO

OPCION 01 =    while(Condicion dato invalido)
OPCION 02 =    while(  !(Condicion dato valido)  )
*/