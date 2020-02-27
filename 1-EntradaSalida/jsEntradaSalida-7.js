/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numA;
    var numB;
    var suma;

    numA = parseInt(document.getElementById("numeroUno").value);
    numB = parseInt(document.getElementById("numeroDos").value);

    suma = numA + numB;

    alert("La suma es de " + suma);
}

function restar()
{

    var numA;
    var numB;
    var resta;

    numA = parseInt(document.getElementById("numeroUno").value);
    numB = parseInt(document.getElementById("numeroDos").value);

    resta = numA - numB;

    alert("La resta es de " + resta);
	
}

function multiplicar()
{ 

    var numA;
    var numB;
    var multiplicacion;

    numA = parseInt(document.getElementById("numeroUno").value);
    numB = parseInt(document.getElementById("numeroDos").value);

    multiplicacion = numA * numB;

    alert("La multiplicacion es de " + multiplicacion);
	
}

function dividir()
{

    var numA;
    var numB;
    var divicion;

    numA = parseInt(document.getElementById("numeroUno").value);
    numB = parseInt(document.getElementById("numeroDos").value);

    divicion = numA / numB;

    alert("La divicion es de " + divicion);
	
}

