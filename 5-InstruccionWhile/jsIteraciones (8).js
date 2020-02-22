function mostrar() {

	var contador = 0;
	//var flag = 0; En este caso reemplazaria a la variable "contador"
	var positivo = 0;
	var negativo = 1;

	do {

		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "))
		}

		//Ahora que tengo el numero validado me fijo el signo.

		if (numero >= 0) { //Para numeros positivos (Mayor o igual a cero)
			positivo = positivo + numero;


		} else { //Para numeros negativos (Menor a cero)
			negativo = negativo * numero;
			//flag = 1;

			contador++;

		}

		seguir = prompt("Quiere ingresar otro numero?");
	} while (seguir == "s");

	/*if ( flag = 0) {
		negativo = 0;
	} */

	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN