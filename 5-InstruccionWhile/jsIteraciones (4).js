function mostrar() {

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	/*while (numero < 0 || numero > 9 || isNaN (numero) ) {
		numero = parseInt(prompt ("Numero incorrecto. Ingrese el numero nuevamente."))
	}*/

	//mientras el numero sea menor a cero
	//o el numero sea mayor a 9
	//o no sea un numero
	//pido el dato nuevamente

	while (!(numero >= 0 && numero <=9)) {
	//me fijo si el numero es un numero valido y lo niego
	//asi cuando es valido no entro al while
	//y cuando es invalido (o sea cuando esta fuera del rango)
	//sì entro al while y lo vuelvo a pedir (al numero)
		numero = parseInt(prompt("Numero incorrecto. Ingrese el numero nuevamente."))

	}


	document.getElementById("Numero").value = numero;



}//FIN DE LA FUNCIÓN

