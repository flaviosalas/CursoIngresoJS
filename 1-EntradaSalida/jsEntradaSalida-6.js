/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numA;
    var numB;
    var suma;

    numA = parseInt(document.getElementById("numeroUno").value);
    numB = parseInt(document.getElementById("numeroDos").value);

    suma = numA + numB;

    alert(suma);

}

