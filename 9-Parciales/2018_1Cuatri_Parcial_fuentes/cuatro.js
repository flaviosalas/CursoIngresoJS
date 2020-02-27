function mostrar()
{

    var numA;
    var numB;
    var resultado;

    //Pido los numeros

    numA = parseInt(prompt("Ingrese el primer numero"));
    numB = parseInt(prompt("Ingrese el segundo numero"));

    //Si son iguales, se muestran concatenados
    if (numA == numB) {
        alert(numA + numB);
    }

    //Si el primer numero es mayor, los resto
    if (numA > numB) {
        alert(numA - numB);
    }

    //Si el primer numero es menor, los sumo
    if (numA < numB) {
        alert(numA + numB);
    }

    //Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
    if (numA + numB > 10) {
        alert("La suma es "+ (numA + numB) + " y superó el 10.")
    }




}
